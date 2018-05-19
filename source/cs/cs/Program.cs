using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace cs
{
    class Program
    {
        static void Main(string[] args)
        {
            if (args.Length == 0 || args[0].Equals(""))
                Console.WriteLine("Yo whazzup?!  C# is awesome!");
            else
                Console.WriteLine("Hey " + args[0] + "!  This program was written in C#.  Definitely better than WinForms IMO. *smile*");
        }
    }
}
