# EmpowerAble — Changelog

> A modern, accessible healthcare navigation platform built for the elderly and differently-abled.

---

## [Unreleased] — In Progress

### Refactor
- Moved `profilep.html` → `public/profile.html` (cleaner public assets structure)

### Navigation & UI
- Finalized high-fidelity UI/UX for the main navigation interface (`nav.html`)
- Implemented mobile-first, elder-friendly layout with large touch targets
- Integrated Google Maps API (Maps, Places, and Directions services)
- Added real-time GPS location tracking
- Voice search functionality for hands-free navigation
- Wheelchair accessibility indicators on map markers

### Map Feature (`mapp/map.html`, `mapp/app.py`)
- Full hospital locator with live map view
- Flask backend (`app.py`) serving location and hospital data
- Distance-based sorting of nearby healthcare facilities
- Accessibility filter for wheelchair-friendly locations
- SQLite database (`database.db`) for storing user/hospital data

### Emergency SOS Feature
- SOS emergency button component added to the UI
- Backend endpoint to handle SOS triggers
- Location-based logic to dynamically surface the nearest hospitals on SOS
- Real-time alert dispatch on emergency activation

### Profile Page (`public/profile.html`)
- User profile and authentication system
- Login / registration flow
- Health profile settings and preferences

### Accessibility Features
- Screen reader support (ARIA labels throughout)
- High-contrast mode toggle
- Font-size adjustment controls
- Keyboard navigation support

### AI Chatbot Assistant
- AI-powered chatbot for healthcare guidance
- Customer support integration

---

## [v0.2.0] — 2026-04-04

### Changes
- Debugged and optimized Google Maps API integration
- Fixed real-time location tracking issues
- Resolved voice search permission handling
- Improved Places API autocomplete for hospital search
- Fixed Directions API rendering on mobile viewports
- Polished overall UI consistency

---

## [v0.1.0] — 2026-04-03

### Changes
- Implemented SOS Emergency button feature
- Created Flask backend for SOS endpoint (`/sos`)
- Integrated nearest hospital logic on SOS trigger
- Linked frontend SOS button to backend API

---

## [v0.0.1] — 2026-04-02

### Initial Build
- Project scaffolded: `hacktropica` workspace initialized
- Built accessible healthcare website foundation
- Implemented hospital locator with map functionality
- Created doctor appointment booking system design
- Designed user login/authentication system
- AI chatbot assistant integrated (initial version)
- Health tips section placeholder added
- Specialized disease information framework established
- `mapp/` subdirectory created for map application
- Requirements file (`requirements.txt`) created for Python dependencies

---

## Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Frontend    | HTML5, Vanilla CSS, JavaScript      |
| Backend     | Python (Flask)                      |
| Database    | SQLite                              |
| Maps        | Google Maps API (Maps, Places, Directions) |
| Hosting     | TBD                                 |

---

## Project Structure

```
hacktropica/
├── nav.html          # Main navigation interface
├── CHANGELOG.md      # This file
├── app_error.log     # Application error logs
├── database.db       # Root SQLite database
├── public/
│   └── profile.html  # User profile & auth page
└── mapp/
    ├── map.html      # Hospital map locator
    ├── app.py        # Flask backend server
    ├── database.db   # Map feature database
    ├── requirements.txt
    └── README.md
```
