#include<iostream> 
class AA{ 
int a;
  public : 
AA( ){cout<<"Initualizing  AA!\n";} 
~AA( ){cout<<"Destroying  AA!\n";} 
}; 
class BB{ 
int b; 
AA p; 
public : 
BB( ){cout<<"Initualizing  BB!\n";} 
~BB( ){cout<<"Destroying  BB!\n";} 
}; 
void main( ) 
{  BB X; 
cout<<"Ending main!\n"; 
} 
