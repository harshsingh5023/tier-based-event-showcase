-- Create events table
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  event_date TIMESTAMP NOT NULL,
  image_url TEXT,
  tier TEXT CHECK (tier IN ('free', 'silver', 'gold', 'platinum')) NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Insert sample events
INSERT INTO events (title, description, event_date, image_url, tier) VALUES
('Welcome Webinar', 'Introduction to our platform and basic features', '2024-02-15 14:00:00', 'https://via.placeholder.com/400x200', 'free'),
('Community Meetup', 'Monthly community gathering and networking', '2024-02-20 18:00:00', 'https://via.placeholder.com/400x200', 'free'),
('Advanced Workshop', 'Deep dive into advanced features and techniques', '2024-02-25 10:00:00', 'https://via.placeholder.com/400x200', 'silver'),
('Silver Member Exclusive', 'Special event for silver tier members', '2024-03-01 16:00:00', 'https://via.placeholder.com/400x200', 'silver'),
('Gold Masterclass', 'Expert-led masterclass on industry best practices', '2024-03-05 13:00:00', 'https://via.placeholder.com/400x200', 'gold'),
('VIP Gold Event', 'Exclusive networking event for gold members', '2024-03-10 19:00:00', 'https://via.placeholder.com/400x200', 'gold'),
('Platinum Summit', 'Annual summit with industry leaders', '2024-03-15 09:00:00', 'https://via.placeholder.com/400x200', 'platinum'),
('Executive Roundtable', 'Private roundtable discussion for platinum members', '2024-03-20 15:00:00', 'https://via.placeholder.com/400x200', 'platinum');