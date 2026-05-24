const Blog = require('../models/Blog');
const BlogCategory = require('../models/BlogCategory');

// GET /api/v1/admin/blogs
const getBlogs = async (req, res) => {
  try {
    const { page = 1, limit = 10, search, status, category } = req.query;
    const query = {};

    if (search) {
      query.title = { $regex: search, $options: 'i' };
    }
    if (status) {
      query.status = status;
    }
    if (category) {
      query.category = category;
    }

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const total = await Blog.countDocuments(query);

    const blogs = await Blog.find(query)
      .populate('author', 'name email')
      .populate('category', 'name slug')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    res.json({
      success: true,
      blogs,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / parseInt(limit))
      }
    });
  } catch (error) {
    console.error('getBlogs error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch blogs' });
  }
};

// GET /api/v1/admin/blogs/:id
const getBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id)
      .populate('author', 'name email')
      .populate('category', 'name slug');

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.json({ success: true, blog });
  } catch (error) {
    console.error('getBlog error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch blog' });
  }
};

// POST /api/v1/admin/blogs
const createBlog = async (req, res) => {
  try {
    const {
      title, summary, content,
      title_nl, summary_nl, content_nl,
      category, tags, featuredImage, seo, status
    } = req.body;

    const blogData = {
      title, summary, content,
      title_nl, summary_nl, content_nl,
      category, tags, featuredImage, seo, status,
      author: req.user._id
    };

    if (status === 'published') {
      blogData.publishedAt = new Date();
    }

    const blog = await Blog.create(blogData);

    res.status(201).json({ success: true, blog });
  } catch (error) {
    console.error('createBlog error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'A blog with this slug already exists' });
    }
    res.status(500).json({ success: false, message: 'Failed to create blog' });
  }
};

// PUT /api/v1/admin/blogs/:id
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    const updateData = { ...req.body };

    // If status changes to published and publishedAt not set
    if (updateData.status === 'published' && !blog.publishedAt) {
      updateData.publishedAt = new Date();
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name email').populate('category', 'name slug');

    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error('updateBlog error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ success: false, message: 'A blog with this slug already exists' });
    }
    res.status(500).json({ success: false, message: 'Failed to update blog' });
  }
};

// DELETE /api/v1/admin/blogs/:id
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.json({ success: true, message: 'Blog deleted successfully' });
  } catch (error) {
    console.error('deleteBlog error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete blog' });
  }
};

// PATCH /api/v1/admin/blogs/:id/status
const toggleStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!['draft', 'published', 'archived'].includes(status)) {
      return res.status(400).json({ success: false, message: 'Invalid status' });
    }

    const updateData = { status };

    if (status === 'published') {
      const blog = await Blog.findById(req.params.id);
      if (blog && !blog.publishedAt) {
        updateData.publishedAt = new Date();
      }
    }

    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    ).populate('author', 'name email').populate('category', 'name slug');

    if (!blog) {
      return res.status(404).json({ success: false, message: 'Blog not found' });
    }

    res.json({ success: true, blog });
  } catch (error) {
    console.error('toggleStatus error:', error);
    res.status(500).json({ success: false, message: 'Failed to update blog status' });
  }
};

// GET /api/v1/admin/blog-categories
const getCategories = async (req, res) => {
  try {
    const categories = await BlogCategory.aggregate([
      {
        $lookup: {
          from: 'blogs',
          localField: '_id',
          foreignField: 'category',
          as: 'blogs'
        }
      },
      {
        $addFields: {
          blogCount: { $size: '$blogs' }
        }
      },
      {
        $project: {
          blogs: 0
        }
      },
      {
        $sort: { name: 1 }
      }
    ]);

    res.json({ success: true, categories });
  } catch (error) {
    console.error('getCategories error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch categories' });
  }
};

// POST /api/v1/admin/blog-categories
const createCategory = async (req, res) => {
  try {
    const { name, description, name_nl, description_nl } = req.body;

    const existing = await BlogCategory.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') }
    });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Category with this name already exists' });
    }

    const category = await BlogCategory.create({ name, description, name_nl, description_nl });

    res.status(201).json({ success: true, category });
  } catch (error) {
    console.error('createCategory error:', error);
    res.status(500).json({ success: false, message: 'Failed to create category' });
  }
};

const updateCategory = async (req, res) => {
  try {
    const { name, description, name_nl, description_nl, isActive } = req.body;

    const update = {};
    if (name !== undefined) update.name = name;
    if (description !== undefined) update.description = description;
    if (name_nl !== undefined) update.name_nl = name_nl;
    if (description_nl !== undefined) update.description_nl = description_nl;
    if (isActive !== undefined) update.isActive = isActive;

    const category = await BlogCategory.findByIdAndUpdate(
      req.params.id,
      update,
      { new: true, runValidators: true }
    );

    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, category });
  } catch (error) {
    console.error('updateCategory error:', error);
    res.status(500).json({ success: false, message: 'Failed to update category' });
  }
};

// DELETE /api/v1/admin/blog-categories/:id
const deleteCategory = async (req, res) => {
  try {
    const blogCount = await Blog.countDocuments({ category: req.params.id });
    if (blogCount > 0) {
      return res.status(400).json({
        success: false,
        message: `Cannot delete category. ${blogCount} blog(s) are using this category.`
      });
    }

    const category = await BlogCategory.findByIdAndDelete(req.params.id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' });
    }

    res.json({ success: true, message: 'Category deleted successfully' });
  } catch (error) {
    console.error('deleteCategory error:', error);
    res.status(500).json({ success: false, message: 'Failed to delete category' });
  }
};

// GET /api/v1/admin/blogs/stats
const getBlogStats = async (req, res) => {
  try {
    const [total, published, drafts, archived] = await Promise.all([
      Blog.countDocuments(),
      Blog.countDocuments({ status: 'published' }),
      Blog.countDocuments({ status: 'draft' }),
      Blog.countDocuments({ status: 'archived' })
    ]);

    res.json({ success: true, stats: { total, published, drafts, archived } });
  } catch (error) {
    console.error('getBlogStats error:', error);
    res.status(500).json({ success: false, message: 'Failed to fetch blog stats' });
  }
};

module.exports = {
  getBlogs,
  getBlog,
  createBlog,
  updateBlog,
  deleteBlog,
  toggleStatus,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getBlogStats
};
