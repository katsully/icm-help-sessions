#ICM Help Sessions
with Kat & Craig

##Week 4

What is an object?</br>
An **object** is a collection of properties, a property is an association between a name (or key) and a value.

How do arrays works?</br>
Let's say you have an array called *data*.

~~~~
data =  []
data[0] = 698
data [1] = 743
data[2] = 84
~~~~

This creates a structure where at index 0 the value will be 698, index 1 the value will be 743, etc.

| 0 | 1 | 2 |
|---|---|---|
|698|743|84 |

#####Degrees and Radians
When talking about units of degrees, most people are more familiar with degrees (0 to 360), but in P5 we use radians. Instead of 0 to 360, in radians, the range is 0 to 2*PI. </br>

Another thing to note is that zero starts at the most right hand point of the circle.

![Degrees and Radians](icmDrawing.png)

##Week 5

#####Constructor Functions vs Object Literals

We have two ways to create an object.

1. Constructor Functions
2. Object Literals

A constructor function is written like so:

~~~~
function Person(first, last) {
   this.first = first;
   this.last = last;
}
~~~~

This is a more dynamic way of creating objects because we can create many objects, each with different values for the first and last property.

~~~~
var kat = new Person("Kat", "Sullivan");
var craig = new Person("Craig", "Pickard");
~~~~

Where as with an object literal, it's more of a container of data

~~~~
var kat = {
   first: "kat",
   last: "sullivan"
}
~~~~

#####Prototypes

Every Javascript object has a **prototype**.

   * Prototype is also an object

All Javascript objects inherit their properties and their methods from their prototype.

Most of you are use to creating functions for an object in the constructor function

~~~~
function Person(first, last) {
   this.first = first;
   this.last = last;
   this.getName = function() {
      return this.first + " " + this.last;
   }
}
~~~~

However, with this way of defining a function, you are redeclaring this function everytime you create a new Person object which isn't very efficient. To only create the getName function once, and have it be available to every Person object, we are going to use the Person object's prototype.

~~~~
Person.prototype.getName = function() {
   return this.firstName + " " + this.last;
}
~~~~
 





