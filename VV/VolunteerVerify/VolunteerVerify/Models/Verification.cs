using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace VolunteerVerify.Models
{
    public class Verification
    {
        public int VerificationId { get; set; }
        public string Name { get; set; }
        public bool IsRenewable { get; set; }
        public int RenewalPeriod { get; set; }
        public string Description { get; set; }
        public string Notes { get; set; }
        public int ChurchId { get; set; }


    }
}