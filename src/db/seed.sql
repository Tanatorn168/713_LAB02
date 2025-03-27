-- Insert sample data into the events table
INSERT INTO events (category, title, description, location, date, time, petsAllowed, organizer) VALUES
('Music', 'Concert', 'Live concert of a famous band', 'Stadium', '2022-02-05', '20:00:00', FALSE, 'Music Company'),
('Sport', 'Football Match', 'Local football match', 'Stadium', '2022-02-06', '15:00:00', FALSE, 'Football Club'),
('Conference', 'Tech Conference', 'Conference on latest technology trends', 'Convention Center', '2022-02-07', '09:00:00', FALSE, 'Tech Company'),
('Food', 'Food Festival', 'Festival showcasing local cuisines', 'Park', '2022-02-08', '12:00:00', TRUE, 'Food Association'),
('Film', 'Film Screening', 'Screening of an independent film', 'Movie Theater', '2022-02-08', '18:00:00', FALSE, 'Film Society'),
('Literature', 'Book Fair', 'Annual book fair with various authors', 'Library', '2022-02-09', '10:00:00', TRUE, 'Book Club');