export default () => `
<section id="add">
    <div class="addEventForm">
        <h2>Add an Event</h2>
        <form class="addform" action="https://formspree.io/xgeypedl" method="POST"> -->
            <div>
                <label>First Name:</label>
                <input type="text" id="fname" name="firstname" placeholder="First Name">
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" id="lname" name="lastname" placeholder="Last Name">
            </div>
            <div>
                <label>Name of Event:</label>
                <input type="text" id="ename" name="nameofevent" placeholder="Name of Event">
            </div>
            <div>
                <label>Name of Organization:</label>
                <input type="text" id="oname" name="organizationname" placeholder="Organization Name">
            </div>
            <div>
                <label>Date of Event:</label>
                <input type="text" id="date" name="startdate" placeholder="Start Date of Event">
            </div>
            <div>
                <label>Time of Event:</label>
                <input type="text" id="time" name="timeofevent" placeholder="Time of Event">
            </div>
            <div>
                <label>Location of Event:</label>
                <input type="text" id="location" name="locationofevent" placeholder="Location of Event">
            </div>
            <div>
                <label>E-mail Address:</label>
                <input type="email" id="email" name="emailaddress" placeholder="E-mail Address">
            </div>
            <div>
                <label>Contact Number:</label>
                <input type="tel" id="number" name="phonenumber" placeholder="Contact Number">
            </div>
            <div>
                <input type="submit" id="submit" placeholder="Submit">
            </div>
        </form>
    </div>
</section>`;
