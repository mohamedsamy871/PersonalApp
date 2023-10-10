using Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalApp.ViewModels
{
    public class HomeViewModel
    {
        public Owner Owner { get; set; }
        public IEnumerable<PortfolioItem> PortfolioItem { get; set; }
    }
}
