const CVTemplateCreative = () => <div style={{
  width: 500,
  height: 700,
  display: "flex",
  fontFamily: "'Arial', sans-serif"
}}>
    {/* Left accent column */}
    <div style={{
    width: "30%",
    background: "linear-gradient(180deg, #7C3AED 0%, #EC4899 100%)",
    padding: "28px 16px",
    display: "flex",
    flexDirection: "column",
    gap: 18
  }}>
      {/* Photo placeholder */}
      <div style={{
      alignSelf: "center"
    }}>
        <div style={{
        width: 60,
        height: 60,
        borderRadius: "50%",
        backgroundColor: "rgba(255,255,255,0.2)",
        border: "3px solid rgba(255,255,255,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
          <span style={{
          color: "white",
          fontSize: 22,
          fontWeight: 700
        }}>E</span>
        </div>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 14
    }}>
        <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 7,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        margin: "0 0 4px"
      }}>Name</p>
        <p style={{
        color: "white",
        fontWeight: 800,
        fontSize: 11,
        margin: 0,
        lineHeight: 1.3
      }}>Eva de Boer</p>
        <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 8,
        margin: "3px 0 0"
      }}>Brand Designer</p>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 14
    }}>
        <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 7,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        margin: "0 0 8px"
      }}>Contact</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 5
      }}>
          <p style={{
          color: "white",
          fontSize: 7.5,
          margin: 0
        }}>eva@cvlabz.nl</p>
          <p style={{
          color: "white",
          fontSize: 7.5,
          margin: 0
        }}>+31 6 44 55 66 77</p>
          <p style={{
          color: "white",
          fontSize: 7.5,
          margin: 0
        }}>Amsterdam</p>
        </div>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 14
    }}>
        <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 7,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        margin: "0 0 10px"
      }}>Skills</p>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 7
      }}>
          {[["Branding", 95], ["Illustration", 85], ["Typography", 90], ["Motion", 70], ["3D Design", 60]].map(([skill, pct]) => <div key={String(skill)}>
              <p style={{
            color: "rgba(255,255,255,0.85)",
            fontSize: 7.5,
            margin: "0 0 3px"
          }}>{String(skill)}</p>
              <div style={{
            height: 3,
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: 2
          }}>
                <div style={{
              height: "100%",
              width: `${pct}%`,
              backgroundColor: "white",
              borderRadius: 2
            }} />
              </div>
            </div>)}
        </div>
      </div>
      <div style={{
      borderTop: "1px solid rgba(255,255,255,0.2)",
      paddingTop: 12
    }}>
        <p style={{
        color: "rgba(255,255,255,0.7)",
        fontSize: 7,
        fontWeight: 700,
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        margin: "0 0 8px"
      }}>Software</p>
        <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3
      }}>
          {["Figma", "Illustrator", "After Effects", "Blender"].map(t => <span key={t} style={{
          color: "rgba(255,255,255,0.85)",
          fontSize: 6.5,
          backgroundColor: "rgba(255,255,255,0.12)",
          padding: "2px 5px",
          borderRadius: 2
        }}>{t}</span>)}
        </div>
      </div>
    </div>
    {/* Right content */}
    <div style={{
    flex: 1,
    backgroundColor: "#FAFAFA",
    padding: "28px 22px",
    display: "flex",
    flexDirection: "column",
    gap: 16
  }}>
      <div>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }}>
          <div style={{
          height: 2,
          width: 16,
          background: "linear-gradient(90deg, #7C3AED, #EC4899)",
          borderRadius: 1
        }} />
          <p style={{
          fontSize: 7.5,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#7C3AED",
          margin: 0
        }}>Experience</p>
        </div>
        <div style={{
        display: "flex",
        flexDirection: "column",
        gap: 12
      }}>
          {[{
          role: "Senior Brand Designer",
          co: "Spotify",
          tag: "#1DB954",
          dates: "2021 – Now",
          detail: "Created global campaign visuals seen by 400M+ users. Developed brand guidelines for podcasting vertical."
        }, {
          role: "Brand Designer",
          co: "WeTransfer",
          tag: "#0B66A5",
          dates: "2019 – 2021",
          detail: "Designed editorial content and interactive landing pages. Art directed two award-winning campaigns."
        }, {
          role: "Visual Designer",
          co: "Studio Dumbar",
          tag: "#E11D48",
          dates: "2017 – 2019",
          detail: "Worked on identity projects for Dutch government clients and international NGOs."
        }].map(e => <div key={e.co}>
              <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}>
                <span style={{
              fontWeight: 700,
              fontSize: 9,
              color: "#1a1a2e"
            }}>{e.role}</span>
                <span style={{
              fontSize: 7.5,
              color: "#9CA3AF"
            }}>{e.dates}</span>
              </div>
              <div style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: `${e.tag}18`,
            borderRadius: 3,
            padding: "1px 6px",
            margin: "3px 0 4px"
          }}>
                <span style={{
              fontSize: 7.5,
              fontWeight: 700,
              color: e.tag
            }}>{e.co}</span>
              </div>
              <p style={{
            fontSize: 7.5,
            color: "#6B7280",
            lineHeight: 1.55,
            margin: 0
          }}>{e.detail}</p>
            </div>)}
        </div>
      </div>
      <div>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        marginBottom: 10
      }}>
          <div style={{
          height: 2,
          width: 16,
          background: "linear-gradient(90deg, #7C3AED, #EC4899)",
          borderRadius: 1
        }} />
          <p style={{
          fontSize: 7.5,
          fontWeight: 700,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#7C3AED",
          margin: 0
        }}>Education</p>
        </div>
        <p style={{
        fontWeight: 700,
        fontSize: 9,
        color: "#1a1a2e",
        margin: 0
      }}>BA Graphic Design</p>
        <p style={{
        fontSize: 8.5,
        color: "#7C3AED",
        fontWeight: 600,
        margin: "2px 0"
      }}>ArtEZ University of the Arts</p>
        <p style={{
        fontSize: 7.5,
        color: "#9CA3AF",
        margin: 0
      }}>Arnhem · 2013 – 2017</p>
      </div>
    </div>
  </div>;

export default CVTemplateCreative;
