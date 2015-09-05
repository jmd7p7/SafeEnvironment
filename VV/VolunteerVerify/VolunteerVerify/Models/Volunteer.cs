using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Web;

namespace VolunteerVerify.Models
{
    [DataContract]
    public class Volunteer
    {
        [DataMember]
        public int VolunteerId { get; set; }
        [DataMember]
        public string FirstName { get; set; }
        [DataMember]
        public string MiddleInitial { get; set; }
        [DataMember]
        public string LastName { get; set; }
        [DataMember]
        public DateTime DOB { get; set; }
        [DataMember]
        public int ChurchId { get; set; }
        [DataMember]
        public string Phone { get; set; }
        [DataMember]
        public string Email { get; set; }

        public List<Verification> Verifications;

        public Volunteer(string _volunteerId, string _firstName, string _middleInitial, string _lastName, string _DOB, string _churchId, string _phone, string _email)
        {
            this.VolunteerId = Convert.ToInt32(_volunteerId);
            this.FirstName = _firstName;
            this.MiddleInitial = _middleInitial;
            this.LastName = _lastName;
            DateTime parsedDate;
            if (!DateTime.TryParse(_DOB, out parsedDate))
            {
                parsedDate = new DateTime(1900, 1, 1);
            }
            this.ChurchId = Convert.ToInt32(_churchId);
            this.Phone = _phone;
            this.Email = _email;
        }

    }
}