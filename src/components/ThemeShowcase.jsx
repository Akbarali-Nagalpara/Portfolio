import React from 'react'
import { motion } from 'framer-motion'
import { themes } from '../utils/themes'

const ThemeShowcase = () => {
  return (
    <div className="theme-showcase">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>Portfolio Theme Options</h1>
          <p>Choose from our collection of professionally designed themes</p>
        </motion.div>

        <div className="themes-preview-grid">
          {Object.entries(themes).map(([themeId, theme], index) => (
            <motion.div
              key={themeId}
              className="theme-preview-card"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                '--preview-primary': theme.colors.primary,
                '--preview-secondary': theme.colors.secondary,
                '--preview-bg': theme.colors.bgPrimary,
                '--preview-bg-secondary': theme.colors.bgSecondary,
                '--preview-text': theme.colors.textPrimary,
                '--preview-text-secondary': theme.colors.textSecondary,
                '--preview-gradient': theme.colors.gradient.primary
              }}
            >
              <div className="preview-mockup">
                {/* Header mockup */}
                <div className="preview-header" style={{ background: theme.colors.bgPrimary, borderBottom: `1px solid ${theme.colors.borderColor}` }}>
                  <div className="preview-logo" style={{ color: theme.colors.primary }}>Ali Nagalpara</div>
                  <div className="preview-nav">
                    <div className="nav-item" style={{ color: theme.colors.textSecondary }}>Home</div>
                    <div className="nav-item" style={{ color: theme.colors.textSecondary }}>About</div>
                    <div className="nav-item" style={{ color: theme.colors.textSecondary }}>Projects</div>
                  </div>
                </div>

                {/* Hero mockup */}
                <div className="preview-hero" style={{ background: theme.colors.gradient.hero }}>
                  <div className="preview-hero-content">
                    <h3 style={{ color: theme.colors.textPrimary }}>Hi, I'm Ali Nagalpara</h3>
                    <p style={{ color: theme.colors.textSecondary }}>Full-Stack Developer</p>
                    <div className="preview-button" style={{ background: theme.colors.gradient.primary, color: 'white' }}>
                      Get In Touch
                    </div>
                  </div>
                </div>

                {/* Cards mockup */}
                <div className="preview-content" style={{ background: theme.colors.bgSecondary, padding: '1rem' }}>
                  <div className="preview-cards">
                    <div className="preview-card" style={{ background: theme.colors.gradient.card, border: `1px solid ${theme.colors.borderColor}` }}>
                      <div className="card-icon" style={{ color: theme.colors.primary }}>💻</div>
                      <h4 style={{ color: theme.colors.textPrimary }}>Frontend</h4>
                      <p style={{ color: theme.colors.textSecondary }}>React, JavaScript</p>
                    </div>
                    <div className="preview-card" style={{ background: theme.colors.gradient.card, border: `1px solid ${theme.colors.borderColor}` }}>
                      <div className="card-icon" style={{ color: theme.colors.primary }}>⚙️</div>
                      <h4 style={{ color: theme.colors.textPrimary }}>Backend</h4>
                      <p style={{ color: theme.colors.textSecondary }}>Java, Spring Boot</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="theme-preview-info">
                <h3>{theme.name}</h3>
                <p>
                  {themeId === 'darkOrange' && "Bold and modern dark theme with vibrant orange accents"}
                  {themeId === 'lightBlue' && "Clean and professional with calming blue tones"}
                  {themeId === 'lightGreen' && "Fresh and natural with eco-friendly green colors"}
                  {themeId === 'lightPurple' && "Creative and modern with elegant purple gradients"}
                  {themeId === 'lightOrange' && "Warm and energetic with sunset orange hues"}
                  {themeId === 'minimalistGray' && "Sophisticated and timeless with neutral tones"}
                </p>
                
                <div className="color-palette">
                  <div className="color-swatch" style={{ backgroundColor: theme.colors.primary }} title="Primary"></div>
                  <div className="color-swatch" style={{ backgroundColor: theme.colors.secondary }} title="Secondary"></div>
                  <div className="color-swatch" style={{ backgroundColor: theme.colors.accent }} title="Accent"></div>
                  <div className="color-swatch" style={{ backgroundColor: theme.colors.textPrimary }} title="Text"></div>
                </div>

                <div className="theme-features">
                  <span className="feature-tag" style={{ background: theme.colors.primary, color: 'white' }}>
                    {themeId === 'darkOrange' ? 'Dark Mode' : 'Light Mode'}
                  </span>
                  <span className="feature-tag" style={{ border: `1px solid ${theme.colors.primary}`, color: theme.colors.primary }}>
                    Professional
                  </span>
                  <span className="feature-tag" style={{ border: `1px solid ${theme.colors.primary}`, color: theme.colors.primary }}>
                    Modern
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="theme-instructions"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2>How to Use Themes</h2>
          <div className="instruction-cards">
            <div className="instruction-card">
              <div className="instruction-number">1</div>
              <h3>Open Theme Selector</h3>
              <p>Click the "Themes" button in the bottom-right corner of any page</p>
            </div>
            <div className="instruction-card">
              <div className="instruction-number">2</div>
              <h3>Choose Your Theme</h3>
              <p>Browse through the available themes and click on your preferred one</p>
            </div>
            <div className="instruction-card">
              <div className="instruction-number">3</div>
              <h3>Automatic Save</h3>
              <p>Your theme preference is automatically saved and will persist on reload</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default ThemeShowcase