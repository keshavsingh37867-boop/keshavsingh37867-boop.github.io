/**
 * Keshav Portfolio - Interactive Behaviors & Dynamic Utilities
 * Data Scientist & Machine Learning Engineer
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
      const isExpanded = navMenu.classList.contains('open');
      mobileToggle.setAttribute('aria-expanded', isExpanded);
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // 2. Dynamic Typewriter Effect for Data Scientist
  const typewriterElem = document.getElementById('typewriterText');
  const roles = [
    'Data Science & AI',
    'Financial Data Pipelines',
    'Machine Learning Models',
    'Statistical Modeling',
    'Power BI Intelligence'
  ];
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 100;

  function typeEffect() {
    if (!typewriterElem) return;
    const currentRole = roles[roleIndex];

    if (isDeleting) {
      typewriterElem.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = 45;
    } else {
      typewriterElem.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentRole.length) {
      isDeleting = true;
      typingSpeed = 1800; // Pause at end of text
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 400; // Pause before new word
    }

    setTimeout(typeEffect, typingSpeed);
  }
  typeEffect();

  // 3. Navigation Scroll Spy & Active State
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Skills Filter Functionality (Slide 9)
  const skillTabs = document.querySelectorAll('#skillFilterTabs .tab-btn');
  const skillCards = document.querySelectorAll('#skillsGrid .skill-card');

  skillTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      skillTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      skillCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 5. Projects Filter Functionality (Slide 10)
  const projectTabs = document.querySelectorAll('#projectFilterTabs .tab-btn');
  const projectCards = document.querySelectorAll('#projectsGrid .project-card');

  projectTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      projectTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const filter = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.3s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 6. Interactive Resume Tabs (Slide 7)
  const resumeTabs = document.querySelectorAll('.resume-tab-btn');
  const resumePanes = document.querySelectorAll('.resume-pane');

  resumeTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      resumeTabs.forEach(t => t.classList.remove('active'));
      resumePanes.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetId = tab.getAttribute('data-target');
      const targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // 7. Project Deep Dive Modal with Thumbnails
  const modalBackdrop = document.getElementById('projectModal');
  const modalHeader = document.getElementById('modalHeader');
  const modalBody = document.getElementById('modalBody');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const projectDetailsBtns = document.querySelectorAll('.project-details-btn');

  const projectData = {
    hms: {
      title: 'Hospital Management & Clinical Intake Platform',
      category: 'Healthcare Data & Web Platform',
      image: 'assets/hospital-project.png',
      tech: ['Python', 'Flask', 'PostgreSQL', 'SQL', 'HTML5', 'CSS3', 'Jinja2'],
      overview: 'A centralized clinical platform built to automate hospital operations including patient registration, doctor appointments, electronic health records, and billing calculations with zero double-booking.',
      features: [
        'PostgreSQL-backed validation pipeline with atomic transactions preventing doctor double-booking.',
        '5 interconnected hospital modules: Patients, Doctors, Appointments, Medical History, Billing.',
        'Instant searchable directories with dynamic filtering by department, date, and doctor specialization.',
        'Modular architecture separating database models, route controllers, and Jinja2 presentation templates.'
      ],
      impact: 'Streamlined clinical intake processes and eliminated appointment scheduling overlaps completely.'
    },
    radar: {
      title: 'Speed Tracking using RFID & RADAR Technology',
      category: 'Embedded Telemetry & Real-Time Data',
      image: 'assets/rfid-project.jpg',
      tech: ['Arduino/C++', 'RADAR Doppler Sensor', 'Embedded Systems', 'Serial Comm'],
      overview: 'An embedded telemetry tracking system designed for intelligent traffic monitoring and speed enforcement, capturing vehicle velocity through microwave Doppler shift processing.',
      features: [
        'Interfaced 24GHz Doppler radar module with microcontroller via high-speed serial communication.',
        'Calculated velocity with high accuracy using frequency modulation algorithms.',
        'Real-time threshold triggering for immediate overspeed alerts and logging.',
        'Designed for low power consumption and resilient continuous 24/7 telemetry monitoring.'
      ],
      impact: 'Demonstrated precise vehicle velocity tracking without reliance on physical road-surface sensors.'
    },
    fintech: {
      title: 'Stock & Mutual Fund Analytics Dashboard',
      category: 'Financial Market Data Science & BI',
      image: 'assets/stock-analysis-project.jpg',
      tech: ['Python', 'SQL', 'Power BI', 'NumPy', 'Financial Data Analytics'],
      overview: 'An end-to-end data pipeline cleaning and modeling multi-year stock and mutual fund records to provide actionable investment insights for analysts and retail investors.',
      features: [
        'Extracted, cleaned, and normalized structured time-series market data using Python and SQL.',
        'Identified key performance indicators (CAGR, volatility, risk-adjusted returns, Sharpe ratios).',
        'Built interactive Power BI dashboards equipped with dynamic slicers and trend forecasting lines.',
        'Developed automated data validation routines to flag outliers and market anomalies.'
      ],
      impact: 'Recognized with internship certificate from Bluestock Fintech for valuable business insights.'
    }
  };

  projectDetailsBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const pKey = btn.getAttribute('data-project');
      const data = projectData[pKey];
      if (!data) return;

      modalHeader.innerHTML = `
        <span class="section-tag" style="margin-bottom:8px;">${data.category}</span>
        <h3 style="font-size:1.45rem; margin-bottom:12px;">${data.title}</h3>
      `;

      modalBody.innerHTML = `
        <img src="${data.image}" alt="${data.title}" class="modal-project-img" />
        <p style="font-size:0.95rem; line-height:1.65; margin-bottom:18px; color:var(--text-body);">${data.overview}</p>
        <h4 style="font-size:1.05rem; margin-bottom:10px; color:var(--accent-cyan);"><i class="fa-solid fa-microchip"></i> Architectural & Analytical Features</h4>
        <ul style="list-style:disc inside; font-size:0.9rem; line-height:1.6; color:var(--text-body); margin-bottom:20px;">
          ${data.features.map(f => `<li>${f}</li>`).join('')}
        </ul>
        <h4 style="font-size:1.05rem; margin-bottom:10px; color:var(--accent-emerald);"><i class="fa-solid fa-chart-line"></i> Outcomes & Impact</h4>
        <p style="font-size:0.9rem; color:var(--text-body); margin-bottom:20px;">${data.impact}</p>
        <div style="display:flex; flex-wrap:wrap; gap:6px; margin-bottom:24px;">
          ${data.tech.map(t => `<span class="tag" style="background:rgba(56,189,248,0.1); color:var(--accent-cyan); padding:4px 10px; border-radius:6px; font-size:0.75rem;">${t}</span>`).join('')}
        </div>
        <div style="display:flex; gap:10px;">
          <a href="https://github.com/keshavsingh37867-boop" target="_blank" class="btn btn-sm btn-primary"><i class="fa-brands fa-github"></i> View on GitHub</a>
          <button class="btn btn-sm btn-outline" id="modalDismiss">Close</button>
        </div>
      `;

      modalBackdrop.classList.add('open');

      const dismissBtn = document.getElementById('modalDismiss');
      if (dismissBtn) {
        dismissBtn.addEventListener('click', () => modalBackdrop.classList.remove('open'));
      }
    });
  });

  // Certificate Modals
  const certBtns = document.querySelectorAll('.cert-view-btn');
  const certDetails = {
    cpp: { title: 'Programming Using C++', issuer: 'Professional Issuing Body', date: 'January 2026', desc: 'Validates proficiency in C++ syntax, object-oriented concepts, template metaprogramming, and STL data structures.' },
    ai: { title: 'Introduction to Artificial Intelligence', issuer: 'Authorized Issuing Body', date: 'March 2026', desc: 'Certifies foundational understanding of machine learning algorithms, state-space search, intelligent agents, and heuristic design.' },
    lead: { title: 'Leadership Fundamentals', issuer: 'Leadership Institute', date: 'October 2025', desc: 'Accreditation in agile project leadership, cross-functional collaboration, and technical communication.' },
    bluestock: { title: 'Data Analyst Internship Certification', issuer: 'Bluestock Fintech', date: 'July 2026', desc: 'Industrial internship verification honoring high-impact contribution in financial data analytics and Power BI reporting.' }
  };

  certBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const cKey = btn.getAttribute('data-cert');
      const cert = certDetails[cKey];
      if (!cert) return;

      modalHeader.innerHTML = `
        <span class="section-tag" style="margin-bottom:8px;">VERIFIED CREDENTIAL</span>
        <h3 style="font-size:1.4rem; margin-bottom:6px;">${cert.title}</h3>
        <p style="font-size:0.85rem; color:var(--accent-cyan);">${cert.issuer} • ${cert.date}</p>
      `;

      modalBody.innerHTML = `
        <div style="background:rgba(255,255,255,0.03); border:1px solid var(--card-border); padding:24px; border-radius:14px; text-align:center; margin-bottom:20px;">
          <i class="fa-solid fa-award" style="font-size:3.5rem; color:var(--accent-amber); margin-bottom:14px;"></i>
          <h4 style="font-size:1.15rem; margin-bottom:8px;">Certificate of Completion & Excellence</h4>
          <p style="font-size:0.9rem; color:var(--text-body); max-width:480px; margin:0 auto;">${cert.desc}</p>
        </div>
        <div style="display:flex; justify-content:flex-end;">
          <button class="btn btn-sm btn-primary" id="modalDismissCert">Close Credential</button>
        </div>
      `;

      modalBackdrop.classList.add('open');
      const dismissCert = document.getElementById('modalDismissCert');
      if (dismissCert) {
        dismissCert.addEventListener('click', () => modalBackdrop.classList.remove('open'));
      }
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', () => modalBackdrop.classList.remove('open'));
  }
  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) modalBackdrop.classList.remove('open');
    });
  }

  // 8. Clipboard Copying & Toast Notifications
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  function showToast(msg) {
    if (!toast || !toastMessage) return;
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  const copyBtns = document.querySelectorAll('.copy-btn');
  copyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          showToast('Copied to clipboard!');
        });
      }
    });
  });

  const copyCvBtn = document.getElementById('copyCvTextBtn');
  if (copyCvBtn) {
    copyCvBtn.addEventListener('click', () => {
      const cvSummary = "Keshav - Data Scientist & Financial Data Analyst\nEmail: keshavsingh37867@gmail.com | Phone: +91 9518222617\nLinkedIn: https://www.linkedin.com/in/keshavsingh--/\nGitHub: https://github.com/keshavsingh37867-boop\nEducation: B.Tech CSE at Lovely Professional University (CGPA: 8.18)\nSkills: Python, SQL, Power BI, NumPy, Pandas, Machine Learning, OpenCV, PostgreSQL, C++";
      navigator.clipboard.writeText(cvSummary).then(() => {
        showToast('Curriculum Vitae summary copied to clipboard!');
      });
    });
  }

  // 9. ATS Resume Print / PDF Export
  const printResumeBtn = document.getElementById('printResumeBtn');
  const resumeDirectBtn = document.getElementById('resumeDirectBtn');
  const heroResumeBtn = document.getElementById('heroResumeBtn');

  if (printResumeBtn) {
    printResumeBtn.addEventListener('click', () => {
      window.print();
    });
  }

  if (resumeDirectBtn) {
    resumeDirectBtn.addEventListener('click', () => {
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  if (heroResumeBtn) {
    heroResumeBtn.addEventListener('click', () => {
      const resumeSection = document.getElementById('resume');
      if (resumeSection) {
        resumeSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // 10. Contact Form Interactive Validation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        document.getElementById('nameError').textContent = 'Please enter your name.';
        isValid = false;
      } else {
        document.getElementById('nameError').textContent = '';
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        document.getElementById('emailError').textContent = '';
      }

      // Validate Subject
      if (!subjectInput.value.trim()) {
        document.getElementById('subjectError').textContent = 'Please provide a subject.';
        isValid = false;
      } else {
        document.getElementById('subjectError').textContent = '';
      }

      // Validate Message
      if (!messageInput.value.trim()) {
        document.getElementById('messageError').textContent = 'Please enter your message.';
        isValid = false;
      } else {
        document.getElementById('messageError').textContent = '';
      }

      if (isValid) {
        const submitBtn = document.getElementById('submitBtn');
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Sending...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Message Sent!</span> <i class="fa-solid fa-circle-check"></i>';
          showToast(`Thank you ${nameInput.value.trim()}! Your message has been received.`);
          contactForm.reset();

          setTimeout(() => {
            submitBtn.innerHTML = '<span>Send Message</span> <i class="fa-solid fa-paper-plane"></i>';
          }, 3500);
        }, 900);
      }
    });
  }
});
