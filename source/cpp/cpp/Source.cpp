#include <iostream>

int main(int argc, const char ** argv)
{
	if (argc == 1)
		std::cout << "Hello from C++!";
	if (strlen(argv[1]) > 0)
		std::cout << "Hey there, " << argv[1] << "!  This program was written in C++.";
	else
		std::cout << "Yo whazzup?! C++ in the hizzouse!";
}