const HeroCVMockup = () => {
  const circumference = 2 * Math.PI * 28;
  const scoreOffset = circumference - 86 / 100 * circumference;
  const bigCircumference = 2 * Math.PI * 38;
  const bigScoreOffset = bigCircumference - 86 / 100 * bigCircumference;
  const strengthItems = [{
    id: "s1",
    label: "Clear and professional summary"
  }, {
    id: "s2",
    label: "Strong impact in experience"
  }, {
    id: "s3",
    label: "Good use of metrics"
  }, {
    id: "s4",
    label: "Well-structured layout"
  }];
  const recommendationItems = [{
    id: "r1",
    label: "Add more keywords related to the job you're applying for."
  }, {
    id: "r2",
    label: "Include more quantified results in your experience."
  }, {
    id: "r3",
    label: "Consider adding a skills section for more visibility."
  }];
  const exp1Bullets = [{
    id: "e1b1",
    text: "Developed and executed digital marketing campaigns that increased website traffic by 42%."
  }, {
    id: "e1b2",
    text: "Managed social media strategy across platforms, growing followers by 35% in 6 months."
  }, {
    id: "e1b3",
    text: "Collaborated with cross-functional teams to launch new product campaigns."
  }];
  const exp2Bullets = [{
    id: "e2b1",
    text: "Assisted in content creation and email marketing campaigns."
  }, {
    id: "e2b2",
    text: "Conducted market research and competitor analysis to support strategy."
  }, {
    id: "e2b3",
    text: "Monitored campaign performance and prepared monthly reports."
  }];
  return <div className="rounded-2xl overflow-hidden bg-white" style={{
    transform: "rotate(3deg)",
    boxShadow: "0 32px 80px -12px rgba(0,0,0,0.28), 0 8px 24px -4px rgba(99,102,241,0.15)",
    maxWidth: 420,
    width: "100%",
    fontSize: 10
  }}>
      <div style={{
      display: "flex",
      minHeight: 560
    }}>
        {/* LEFT COLUMN — CV Content */}
        <div style={{
        width: "60%",
        backgroundColor: "white",
        padding: "14px 12px",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        borderRight: "1px solid #f1f5f9"
      }}>
          {/* Header */}
          <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 6
        }}>
            <div style={{
            flex: 1
          }}>
              <p style={{
              fontSize: 15,
              fontWeight: 800,
              color: "#1e1b4b",
              margin: 0,
              lineHeight: 1.2
            }}>Sophia Bennett</p>
              <p style={{
              fontSize: 9.5,
              fontWeight: 700,
              color: "#6366f1",
              margin: "2px 0 6px"
            }}>Marketing Specialist</p>
              <div style={{
              display: "flex",
              flexDirection: "column",
              gap: 2.5
            }}>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: 4
              }}>
                  <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                  </div>
                  <span style={{
                  fontSize: 7.5,
                  color: "#475569"
                }}>sophia.bennett@email.com</span>
                </div>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: 4
              }}>
                  <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.56 4.87 2 2 0 0 1 3.53 2.69h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.28-1.28a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                  <span style={{
                  fontSize: 7.5,
                  color: "#475569"
                }}>(555) 123-4567</span>
                </div>
                <div style={{
                display: "flex",
                alignItems: "center",
                gap: 4
              }}>
                  <div style={{
                  width: 10,
                  height: 10,
                  borderRadius: "50%",
                  backgroundColor: "#eef2ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0
                }}>
                    <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                  </div>
                  <span style={{
                  fontSize: 7.5,
                  color: "#475569"
                }}>New York, NY</span>
                </div>
              </div>
            </div>
            {/* Score ring */}
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            flexShrink: 0
          }}>
              <div style={{
              position: "relative",
              width: 52,
              height: 52
            }}>
                <svg width="52" height="52" viewBox="0 0 52 52" style={{
                transform: "rotate(-90deg)"
              }}>
                  <circle cx="26" cy="26" r="22" fill="none" stroke="#f0fdf4" strokeWidth="5" />
                  <circle cx="26" cy="26" r="22" fill="none" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeDasharray={2 * Math.PI * 22} strokeDashoffset={2 * Math.PI * 22 * (1 - 86 / 100)} />
                </svg>
                <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}>
                  <span style={{
                  fontSize: 10,
                  fontWeight: 900,
                  color: "#1e1b4b",
                  lineHeight: 1
                }}>86</span>
                  <span style={{
                  fontSize: 6,
                  color: "#94a3b8",
                  fontWeight: 600
                }}>/100</span>
                </div>
              </div>
              <span style={{
              fontSize: 7,
              fontWeight: 800,
              color: "#22c55e",
              textAlign: "center"
            }}>Strong CV!</span>
            </div>
          </div>

          {/* Divider */}
          <div style={{
          height: 1,
          backgroundColor: "#f1f5f9"
        }} />

          {/* Professional Summary */}
          <div>
            <p style={{
            fontSize: 7,
            fontWeight: 800,
            color: "#6366f1",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            margin: "0 0 4px"
          }}>Professional Summary</p>
            <p style={{
            fontSize: 7.5,
            color: "#475569",
            lineHeight: 1.6,
            margin: 0
          }}>
              Results-driven marketing specialist with 6+ years of experience in digital marketing, brand strategy, and content creation. Passionate about building data-driven campaigns that drive engagement and grow brands.
            </p>
          </div>

          <div style={{
          height: 1,
          backgroundColor: "#f1f5f9"
        }} />

          {/* Work Experience */}
          <div>
            <p style={{
            fontSize: 7,
            fontWeight: 800,
            color: "#6366f1",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            margin: "0 0 6px"
          }}>Work Experience</p>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 8
          }}>
              {/* Entry 1 */}
              <div style={{
              display: "flex",
              gap: 5
            }}>
                <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 2,
                flexShrink: 0
              }}>
                  <div style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#6366f1",
                  flexShrink: 0
                }} />
                  <div style={{
                  width: 1,
                  flex: 1,
                  backgroundColor: "#e2e8f0",
                  marginTop: 2
                }} />
                </div>
                <div style={{
                flex: 1
              }}>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}>
                    <span style={{
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#1e1b4b"
                  }}>Marketing Specialist</span>
                    <span style={{
                    fontSize: 7,
                    color: "#94a3b8"
                  }}>Jan 2021 – Present</span>
                  </div>
                  <p style={{
                  fontSize: 7.5,
                  color: "#6366f1",
                  fontWeight: 600,
                  margin: "1px 0 3px"
                }}>BrightPath Solutions</p>
                  <ul style={{
                  margin: 0,
                  paddingLeft: 10
                }}>
                    {exp1Bullets.map(b => <li key={b.id} style={{
                    fontSize: 7,
                    color: "#475569",
                    lineHeight: 1.55
                  }}>{b.text}</li>)}
                  </ul>
                </div>
              </div>
              {/* Entry 2 */}
              <div style={{
              display: "flex",
              gap: 5
            }}>
                <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingTop: 2,
                flexShrink: 0
              }}>
                  <div style={{
                  width: 7,
                  height: 7,
                  borderRadius: "50%",
                  backgroundColor: "#cbd5e1",
                  flexShrink: 0
                }} />
                </div>
                <div style={{
                flex: 1
              }}>
                  <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "baseline"
                }}>
                    <span style={{
                    fontSize: 8,
                    fontWeight: 800,
                    color: "#1e1b4b"
                  }}>Marketing Coordinator</span>
                    <span style={{
                    fontSize: 7,
                    color: "#94a3b8"
                  }}>Jun 2018 – Dec 2020</span>
                  </div>
                  <p style={{
                  fontSize: 7.5,
                  color: "#6366f1",
                  fontWeight: 600,
                  margin: "1px 0 3px"
                }}>Peak Media Group</p>
                  <ul style={{
                  margin: 0,
                  paddingLeft: 10
                }}>
                    {exp2Bullets.map(b => <li key={b.id} style={{
                    fontSize: 7,
                    color: "#475569",
                    lineHeight: 1.55
                  }}>{b.text}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div style={{
          height: 1,
          backgroundColor: "#f1f5f9"
        }} />

          {/* Education */}
          <div>
            <p style={{
            fontSize: 7,
            fontWeight: 800,
            color: "#6366f1",
            letterSpacing: "0.08em",
            textTransform: "uppercase" as const,
            margin: "0 0 4px"
          }}>Education</p>
            <div style={{
            display: "flex",
            gap: 6,
            alignItems: "flex-start"
          }}>
              <div style={{
              width: 18,
              height: 18,
              borderRadius: "50%",
              backgroundColor: "#eef2ff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              marginTop: 1
            }}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div>
                <p style={{
                fontSize: 8,
                fontWeight: 800,
                color: "#1e1b4b",
                margin: 0
              }}>Bachelor of Business Administration</p>
                <p style={{
                fontSize: 7.5,
                color: "#6366f1",
                fontWeight: 600,
                margin: "1px 0"
              }}>University of Michigan</p>
                <p style={{
                fontSize: 7,
                color: "#94a3b8",
                margin: 0
              }}>2014 – 2018</p>
              </div>
            </div>
          </div>

          {/* AI Coach Bar */}
          <div style={{
          marginTop: "auto",
          backgroundColor: "#eef2ff",
          borderRadius: 8,
          padding: "8px 10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 6
        }}>
            <div style={{
            display: "flex",
            alignItems: "center",
            gap: 6
          }}>
              <div style={{
              width: 22,
              height: 22,
              borderRadius: "50%",
              backgroundColor: "#6366f1",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0
            }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
              </div>
              <div>
                <p style={{
                fontSize: 7.5,
                fontWeight: 800,
                color: "#1e1b4b",
                margin: 0
              }}>Ask AI Coach Anything</p>
                <p style={{
                fontSize: 6.5,
                color: "#64748b",
                margin: 0
              }}>Get personalized advice and improve your CV with AI.</p>
              </div>
            </div>
            <button style={{
            backgroundColor: "#6366f1",
            color: "white",
            fontSize: 6.5,
            fontWeight: 800,
            padding: "4px 8px",
            borderRadius: 5,
            border: "none",
            cursor: "pointer",
            whiteSpace: "nowrap" as const,
            flexShrink: 0
          }}>
              Ask a Question →
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN — Panels */}
        <div style={{
        width: "40%",
        backgroundColor: "#f8fafc",
        padding: "10px 8px",
        display: "flex",
        flexDirection: "column",
        gap: 7
      }}>
          {/* Panel 1: Resume Score */}
          <div style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: "10px 10px",
          border: "1px solid #f1f5f9"
        }}>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 8
          }}>
              <span style={{
              fontSize: 8,
              fontWeight: 800,
              color: "#1e1b4b"
            }}>Resume Score</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" /><polyline points="16 7 22 7 22 13" /></svg>
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 5
          }}>
              <div style={{
              position: "relative",
              width: 64,
              height: 64
            }}>
                <svg width="64" height="64" viewBox="0 0 64 64" style={{
                transform: "rotate(-90deg)"
              }}>
                  <circle cx="32" cy="32" r="27" fill="none" stroke="#f0fdf4" strokeWidth="6" />
                  <circle cx="32" cy="32" r="27" fill="none" stroke="#22c55e" strokeWidth="6" strokeLinecap="round" strokeDasharray={2 * Math.PI * 27} strokeDashoffset={2 * Math.PI * 27 * (1 - 86 / 100)} />
                </svg>
                <div style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}>
                  <span style={{
                  fontSize: 14,
                  fontWeight: 900,
                  color: "#1e1b4b"
                }}>86%</span>
                </div>
              </div>
              <p style={{
              fontSize: 7.5,
              fontWeight: 800,
              color: "#1e1b4b",
              margin: 0,
              textAlign: "center"
            }}>Great job! Your resume is strong.</p>
              <p style={{
              fontSize: 7,
              color: "#94a3b8",
              margin: 0,
              textAlign: "center",
              lineHeight: 1.4
            }}>See recommendations below to make it even better.</p>
            </div>
          </div>

          {/* Panel 2: Top Strengths */}
          <div style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: "10px 10px",
          border: "1px solid #f1f5f9"
        }}>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 7
          }}>
              <span style={{
              fontSize: 8,
              fontWeight: 800,
              color: "#1e1b4b"
            }}>Top Strengths</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 5
          }}>
              {strengthItems.map(item => <div key={item.id} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 5
            }}>
                  <div style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: "#dcfce7",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                marginTop: 0.5
              }}>
                    <svg width="7" height="7" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m5 12 5 5L20 7" /></svg>
                  </div>
                  <span style={{
                fontSize: 7,
                color: "#475569",
                lineHeight: 1.45
              }}>{item.label}</span>
                </div>)}
            </div>
          </div>

          {/* Panel 3: Recommendations */}
          <div style={{
          backgroundColor: "white",
          borderRadius: 8,
          padding: "10px 10px",
          border: "1px solid #f1f5f9"
        }}>
            <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 7
          }}>
              <span style={{
              fontSize: 8,
              fontWeight: 800,
              color: "#1e1b4b"
            }}>Recommendations</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" /><path d="M9 18h6M10 22h4" /></svg>
            </div>
            <div style={{
            display: "flex",
            flexDirection: "column",
            gap: 6
          }}>
              {recommendationItems.map(item => <div key={item.id} style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 5
            }}>
                  <div style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
                flexShrink: 0,
                marginTop: 3
              }} />
                  <span style={{
                fontSize: 7,
                color: "#475569",
                lineHeight: 1.45
              }}>{item.label}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroCVMockup;
