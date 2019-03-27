using DotNetCoreWebApi.Model;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace DotNetCoreWebApi.DbContexts
{
    public class MeasurementContext : DbContext
    {
        public MeasurementContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Measurement> Measurements { get; set; }
    }
}
