using Helperland.Data;
using Helperland.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Helperland.Controllers
{
    public class ContactUsController : Controller
    {
        private readonly HelperlandContext _helperlandContext;

        public ContactUsController(HelperlandContext helperlandContext)
        {
            _helperlandContext = helperlandContext;
        }

        [HttpPost]
        public IActionResult submit(ContactU contactU)
        {
            _helperlandContext.ContactUs.Add(contactU);
            _helperlandContext.SaveChanges();
            return View();
        }
    }
}
