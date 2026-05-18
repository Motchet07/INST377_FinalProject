# INST377 Final Project
## About Email Trust Checker
Jump to [Developer Guide](#developer-guide)

### Project Description:
A full-stack web application that allows users to verify email addresses in real time using the Kickbox API. The goal of the application is to help users quickly determine whether an email address is valid, risky, or undeliverable before attempting to send messages to it. Many people and businesses rely heavily on email communication, but invalid or disposable email addresses can lead to failed communication, spam issues, and wasted resources. This application is designed to simplify that process by providing easy-to-understand verification results in a clean and user-friendly interface.

The application will allow users to enter an email address and receive information such as deliverability status, confidence score, whether the email is disposable, and whether it is a role-based email like support@ or admin@. The frontend will be built using React, HTML, and CSS to create a responsive and modern interface, while the backend will use JavaScript/Node.js to securely communicate with the Kickbox API and manage data flow between the frontend and database. Supabase will be used to store previous email verification searches so users can view search history and previous results. The overall goal of the project is to create a practical, real-world tool that demonstrates API integration, database usage, backend development, and frontend design in a full-stack web application.

### Features
- Email validation and verification
- Deliverability checking (deliverable, risky, undeliverable)
- Disposable email detection
- Role-based email detection (e.g., support@, admin@)
- Confidence scoring (Sendex)
- Search history tracking
- REST API backend
- Responsive UI for desktop and mobile

### Description of Target Browsers:
This application is designed to be fully web-based and responsive, meaning it can be accessed on any modern browser across multiple devices. The primary target browsers include Google Chrome, Safari (for iOS devices such as iPhones and iPads), Microsoft Edge, and Firefox. The interface will be optimized for both desktop and mobile use, allowing users to easily verify email addresses whether they are on a laptop, tablet, or smartphone. On mobile devices (iOS and Android), the layout will adjust for smaller screens to ensure the input field, results display, and navigation remain clear and easy to use.

## Developer Guide

The system uses a modern full-stack architecture:
- **Frontend:** React
- **Backend:** Node.js + Express
- **Database:** Supabase
- **External API:** Kickbox API

### How It Works

1. User enters an email address in the frontend
2. Frontend sends request to backend API
3. Backend sends request to Kickbox API
4. Kickbox returns email verification data
5. Backend processes and formats response
6. Data is stored in Supabase (history)
7. Frontend displays clean, user-friendly results

### 📡 API Used

#### Kickbox API
This project uses the Kickbox email verification API to validate email addresses.

**Endpoint:**
```

[https://api.kickbox.com/v2/verify](https://api.kickbox.com/v2/verify)

```

**Example Request:**
```

GET [https://api.kickbox.com/v2/verify?email=test@example.com&apikey=YOUR_API_KEY](https://api.kickbox.com/v2/verify?email=test@example.com&apikey=YOUR_API_KEY)

````

**Example Response:**
```json
{
  "result": "deliverable",
  "reason": "accepted_email",
  "disposable": false,
  "role": false,
  "sendex": 0.92
}
````

---

### 🛠️ Installation

#### 1. Clone the repository

```bash
git clone https://github.com/your-username/email-verification-app.git
cd email-verification-app
```

---

#### 2. Install backend dependencies

```bash
cd backend
npm install
```

---

#### 3. Install frontend dependencies

```bash
cd frontend
npm install
```

---

#### 4. Configure environment variables

Create a `.env` file in the backend folder:

```env
KICKBOX_API_KEY=your_api_key_here
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_key
PORT=3000
```

---

### Running the Application

#### Start backend server

```bash
cd backend
npm start
```

Backend runs at:

```
http://localhost:3000
```

#### Start frontend

```bash
cd frontend
npm start
```

Frontend runs at:

```
http://localhost:5173 (or configured port)
```


### API Endpoints (Backend)

#### GET /api/verify-email

Verifies an email address using the Kickbox API.

**Query Params:**

* `email` (required)

**Example:**

```
/api/verify-email?email=test@example.com
```


#### GET /api/history

Returns previously verified emails from the database.


#### POST /api/history

Stores a new email verification result.


### Database (Supabase)

The application uses Supabase to store:

* Email addresses checked
* Verification results
* Timestamp of each lookup


### Known Issues

* Kickbox API may return "unknown" for some domains
* API rate limits may slow down frequent requests
* Supabase updates may have slight delays
* Minimal frontend validation currently implemented


### Future Improvements

* User authentication (Supabase Auth)
* Bulk email verification
* Email analytics dashboard
* Caching API responses for performance
* Dark mode UI
* Improved mobile optimization


### Target Browsers
This application supports:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Safari (iOS/macOS)
* Mobile browsers (iOS & Android)

The UI is fully responsive for desktop, tablet, and mobile devices.


### Project Structure
```
email-verification-app/
│
├── frontend/
├── backend/
├── docs/
├── README.md
└── .env
```


### License
This project is for educational purposes.
