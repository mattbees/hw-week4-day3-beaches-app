DROP TABLE beaches;
DROP TABLE seas;

CREATE TABLE seas(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  area INT
);

CREATE TABLE beaches(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  grid_ref VARCHAR,
  swell_frequency VARCHAR,
  sea_id INT REFERENCES seas(id)
);

INSERT INTO seas (name, area) VALUES ('North Sea', 570000);
INSERT INTO seas (name, area) VALUES ('Atlantic Ocean', 106460000);
INSERT INTO seas (name) VALUES ('The Minch');

INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Gullane Beach', 'NT486830', 'low', 1);
INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Findhorn Back Beach', 'NJ050647', 'low', 1);
INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Achnahaird Bay', 'NC020133', 'low', 3);
INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Balnakeil Bay', 'NC391689', 'medium', 2);
INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Farr Bay', 'NC713626', 'high', 2);
INSERT INTO beaches (name, grid_ref, swell_frequency, sea_id) VALUES (
  'Belhaven Bay', 'NT651794', 'medium', 1);
