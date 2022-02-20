﻿using Helperland.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Helperland.ViewModel
{
    public class BookServiceViewModel 
    {
        public List<AddressViewModel>  address { get; set; }
        public ZipCodeViewModel zipCodeViewModel { get; set; }
        public ServiceRequestViewModel ServiceRequestViewModel { get; set; }
        
        [Required]
        public bool checkPolicy { get; set; }

        public int addressId { get; set; }
    }
}
