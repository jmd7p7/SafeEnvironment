using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using VolunteerVerify.Models;
using VolunteerVerify.Repositories;

namespace VolunteerVerify.Controllers
{
    [EnableCorsAttribute("http://localhost:31073", "*", "*")]
    public class VolunteersController : ApiController
    {
        // GET: api/Volunteers
        public IEnumerable<Volunteer> Get()
        {
            try
            {
                var volunteerRepo = new VolunteerRepository();
                return volunteerRepo.getVolunteers();
            }
            catch
            {
                //TO DO: Implement catch code and delete the return statement below
                return new List<Volunteer>();
            }
        }

        // GET: api/Volunteers/5
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Volunteers
        public void Post([FromBody]string value)
        {
        }

        // PUT: api/Volunteers/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE: api/Volunteers/5
        public void Delete(int id)
        {
        }
    }
}
