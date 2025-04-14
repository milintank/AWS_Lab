# AWS_Lab
# Step 1: 
- Log in to your AWS Console.
- Navigate to EC2 → Click Launch Instance.
- Choose an Amazon Machine Image (AMI) (e.g., Ubuntu 22.04).
- Select an instance type (e.g., t2.micro for free-tier).
- Configure security groups:- Allow SSH (port 22) for remote access.
- Allow HTTP (port 80) and HTTPS (port 443) for web traffic.
- Create or select an SSH key pair for secure access.
- Click Launch.

# Step 2: Connect to Your EC2 Instance
- Open your terminal and connect via SSH: ssh -i your-key.pem ubuntu@your-ec2-public-ip  
- Update the system: sudo apt update && sudo apt upgrade -y  

# Step 3: Install Required Software
- Install NGINX (for reverse proxy):sudo apt install nginx -y
- Install Node.js and npm:sudo apt install nodejs npm -y
- Install Git:sudo apt install git -y

# Step 4: Clone Your Web Application
- Clone your repository:git clone https://github.com/your-username/your-repo.git
- Move into the project folder:cd your-repo
- Install dependencies:npm install

# Step 5: Run the Application
- Start the application:node app.js

# Step 6: Configure NGINX as a Reverse Proxy
- Open the NGINX config file:sudo nano /etc/nginx/sites-available/default
- Add the following configuration:server {
    listen 80;
    server_name your-ec2-public-ip;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}

- Save and exit (CTRL + X, then Y).
- Restart NGINX:sudo systemctl restart nginx

# Step 7: Ensure Security & Accessibility
- Check firewall rules:sudo ufw allow 'Nginx Full'
- Verify the application is running:curl http://your-ec2-public-ip
- Open your browser and visit:http://your-ec2-public-ip




