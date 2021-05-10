
# spacepup
![SpaceDoggo](https://user-images.githubusercontent.com/39139814/117551180-4d16f600-aff9-11eb-8dc6-f20cf144ce1f.png)

------------------------------------------------------------------
San Jose State University
Enterprise Software -- CMPE 172 -- Spring 2021

------------------------------------------------------------------
Contributors:

Sair Abbas

Antonio Magana

Daniel Tran

------------------------------------------------------------------
Project Description

Spacepup is a hotel room reservation system where it contains dual functionalities for both admins and guests
Depending on the the view you pick while on the application it will provide different privileges 

If under the admin view, your privileges are being able to see a list of people who reserved rooms, as well as create/modify/delete rooms 

If under the user view, your privileges are being able to reserve a room with the credentials you provide


------------------------------------------------------------------
REQUIRED LIBRARIES
- PostgreSQL
- Apache
- WAMPP
- Node.js
- React
- JDK 8+
- Springboot
- AWS CLI 

------------------------------------------------------------------
Screenshots

Home Page
![unknown](https://user-images.githubusercontent.com/39139814/117719341-217b4380-b192-11eb-9f6b-06dea482f66b.png)
Admin Page showing currently booked rooms
![unknown](https://user-images.githubusercontent.com/39139814/117719437-3eb01200-b192-11eb-9094-26ae60c5390b.png)
Admin Page showing currently available Rooms
![unknown](https://user-images.githubusercontent.com/39139814/117719490-4e2f5b00-b192-11eb-94b1-0af236bcf2c7.png)
Editing a room
![unknown](https://user-images.githubusercontent.com/39139814/117719548-6010fe00-b192-11eb-8a72-98f408b5e944.png)
User Page showing rooms with descriptions
![unknown](https://user-images.githubusercontent.com/39139814/117719589-6c955680-b192-11eb-9027-f88d064e7d2c.png)
Booking a room
![unknown](https://user-images.githubusercontent.com/39139814/117719631-77e88200-b192-11eb-83a2-775c6b32fa7a.png)


------------------------------------------------------------------
How to run the project:

1) Clone Repository
2) Install and link Postgres database via application.properties
3) Start Backend via BackendApplication or through normal IDE operations
4) In terminal, navigate to frontend directory, Run Command "npm install" followed by "npm start"
5) Navigate to http://localhost:3000 in your browser of choice*

\* *For Best Results use Google Chrome*
------------------------------------------------------------------
General Guidelines


To reserve a room:
1) Name must be more than 2 characters
2) Must be older than 13
3) Valid Email Provided
4) Reservation Date must be in the future

To add a room:
1) An availability date must be in the futurte

To modify a room:
1) A reserved room can not be deleted
2) A reserved room can be edited
------------------------------------------------------------------
Diagrams

System Diagrams
<img width="677" alt="Screen Shot 2021-05-10 at 3 27 30 PM" src="https://user-images.githubusercontent.com/10037700/117732186-44aeee80-b1a4-11eb-904e-aeb1a1055503.png">

Class Diagram for Spring Boot Application
<img width="567" alt="Screen Shot 2021-05-10 at 3 28 12 PM" src="https://user-images.githubusercontent.com/10037700/117732242-614b2680-b1a4-11eb-9356-68db26a0055f.png">

Sequence Diagram
<img width="925" alt="Screen Shot 2021-05-10 at 3 29 19 PM" src="https://user-images.githubusercontent.com/10037700/117732309-82ac1280-b1a4-11eb-861e-0e2b1dd21ade.png">

Database Schema (Original)
<img width="1093" alt="Screen Shot 2021-05-10 at 3 29 49 PM" src="https://user-images.githubusercontent.com/10037700/117732372-9d7e8700-b1a4-11eb-9be8-3dea94369860.png">


Database Schema (Current)
<img width="453" alt="Screen Shot 2021-05-10 at 3 30 33 PM" src="https://user-images.githubusercontent.com/10037700/117732441-c1da6380-b1a4-11eb-8fd2-0b47eb1abf70.png">



