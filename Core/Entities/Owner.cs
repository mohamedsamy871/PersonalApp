﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
namespace Core.Entities
{
    public class Owner:EntityBase
    {
        public string FullName { get; set; }
        public string Job { get; set; }
        public string Avatar { get; set; }
    }
}
