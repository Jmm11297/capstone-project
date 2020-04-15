export default () => `
<section id="add">
    <div class="addEventForm">
        <h2>Add an Event</h2>
        <form class="addform" action="https://formspree.io/xgeypedl" method="POST">
            <div>
                <label>First Name:</label>
                <input type="text" id="fname" name="firstname">
            </div>
            <div>
                <label>Last Name:</label>
                <input type="text" id="lname" name="lastname">
            </div>
            <div>
                <label>Name of Event:</label>
                <input type="text" id="ename" name="nameofevent">
            </div>
            <div>
                <label>Name of Organization:</label>
                <input type="text" id="oname" name="organizationname">
            </div>
            <div>
                <label>Date of Event:</label>
                <input type="text" id="date" name="startdate">
            </div>
            <div>
                <label>Time of Event:</label>
                <input type="text" id="time" name="timeofevent">
            </div>
            <div>
                <label>Location of Event:</label>
                <input type="text" id="location" name="locationofevent">
            </div>
            <div>
                <label>E-mail Address:</label>
                <input type="email" id="email" name="emailaddress">
            </div>
            <div>
                <label>Contact Number:</label>
                <input type="tel" id="number" name="phonenumber">
            </div>
            <div>
                <input type="submit" id="submit">
            </div>
        </form>
    </div>
</section>`;
