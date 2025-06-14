# Achiever Fitness Hub 🏋️‍♂️

## Overview
Achiever Fitness Hub is a **digital personal gym trainer** that helps users track body metrics, receive **personalized workout & diet plans**, earn points for fitness milestones, and monitor progress through analytics.

## Features
🔹 **User Profiling** – Capture health data to generate customized fitness plans.  
🔹 **Dynamic Routines** – Daily workouts + diet plans based on fitness goals.  
🔹 **Gamification** – Earn points for achievements with redeemable perks.  
🔹 **Progress Tracking** – Visualize the fitness journey with analytics.

## Core Requirements 🚀

### 1️⃣ User Registration & Health Profiling
✅ Secure **username & password authentication**.  
✅ Onboarding process:
- Input **weight, height, age, gender, fitness goals** (e.g., "Lose 10kg," "Build Muscle").
- Specify **health restrictions** (injuries, dietary preferences).

### 2️⃣ Fitness Plan Generator
🏋️ **Workout Plans**
- Daily workout routines (exercises, sets, reps, rest time).
- Auto-adjustment based on user progress (e.g., increase difficulty after 2 weeks).

🍽️ **Diet Plans**
- Calorie-counted meal plans (breakfast, lunch, dinner, snacks) with recipes.
- Generate **grocery lists** (PDF download option).

### 3️⃣ Gamified Checkpoint System
🏆 **Points & Rewards**
- Earn points for **daily workouts** (10 pts), **hitting weight goals** (50 pts), and **7-day streaks** (100 pts).
- Redeem points for **badges & fitness gear discounts**.

🎯 **Milestones**
- Unlock achievements automatically (e.g., "First 5kg Lost!").

### 4️⃣ Progress Dashboard
📊 **Analytics**
- View **weight & measurement trends** (charts).
- Track **points earned vs. fitness goals**.
- Monitor **workout history** (calories burned, consistency).

📅 **Daily Check-ins**
- Log daily weight (optional).
- Mark workouts as complete.

### 5️⃣ Trainer Portal (Optional)
🏋️ Certified trainers can:
- Create **custom workout & diet plans** for users.
- Track user progress via an analytics dashboard.
- Send **motivational messages & personalized coaching**.

## Tech Stack ⚙️
🔹 **Frontend:** Next.js  
🔹 **Backend:** Django  
🔹 **Database:** MySQL  
🔹 **Authentication:** Username & password

## Installation 🛠️
Clone the repository:

```bash
git clone https://github.com/sisantaChhatoi/achiever-fitness-hub.git
cd achiever-fitness-hub
pip install -r requirements.txt  # Backend dependencies
npm install  # Frontend dependencies