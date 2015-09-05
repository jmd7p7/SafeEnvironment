using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using VolunteerVerify.Models;
using System.Data.SQLite;
using System.Configuration;

namespace VolunteerVerify.Repositories
{
    public class VolunteerRepository
    {
        internal List<Volunteer> getVolunteers() {
            string conString = ConfigurationManager.ConnectionStrings["SqliteContext"].ConnectionString;
            string cmdString = "select * from Volunteer";
            List<Volunteer> volunteers = new List<Volunteer>();

                using (SQLiteConnection con = new SQLiteConnection(conString))
                {
                    using (SQLiteCommand cmd = new SQLiteCommand(cmdString, con))
                    {
                        con.Open();
                        using (SQLiteDataReader rdr = cmd.ExecuteReader())
                        {
                            while (rdr.Read())
                            {
                                volunteers.Add(new Volunteer(
                                        _volunteerId: rdr["VolunteerId"].ToString(),
                                        _firstName: rdr["FirstName"].ToString(),
                                        _middleInitial: rdr["MiddleInitial"].ToString(),
                                        _lastName: rdr["LastName"].ToString(),
                                        _DOB: rdr["DOB"].ToString(),
                                        _churchId: rdr["ChurchId"].ToString(),
                                        _email: rdr["Email"].ToString(),
                                        _phone: rdr["Phone"].ToString()
                                    ));
                            }
                        }
                    }
                }
            return volunteers;
        }
    }
}