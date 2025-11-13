# Short Responses

For this short response assignment, aim to write a response with the following qualities (your instructor will give you feedback on these areas):
- [] Addresses all parts of the prompt
- [] Accurately uses relevant technical terminology
- [] Is free of grammar and spelling mistakes (double check with grammarly!)
- [] Uses markdown to enhance readability (preview in VS Code with Command/Control + Shift + V)
- [] Is easy to comprehend

For each prompt below, write your response in the space provided. Aim to answer each prompt in 2-5 concise sentences. Make sure to preview your markdown to check how it is rendered before submitting.

## Prompt 1

Examine this code:

```js
class Shape {
  constructor(type) {
    this.type = type;
  }
  getArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super('circle');
    this.radius = radius;
  }
  getArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Square extends Shape {
  constructor(side) {
    super('square');
    this.side = side;
  }
  getArea() {
    return this.side ** 2;
  }
}

const shapes = [new Circle(5), new Square(4), new Circle(3)];
const totalArea = shapes.reduce((sum, shape) => sum + shape.getArea(), 0);
```

Explain how this code demonstrates **polymorphism**. Why can we call `getArea()` on each shape without checking what type of shape it is?

## Response 1
This code demonstrates polymorphism because it allows different object types ``Circle`` and ``Square`` to be treated the same way through a shared interface. Each class defines its own version of the ``getArea()`` method, but they can all be called using the same method name without checking the object’s type. This works because both subclasses inherit from the same parent class Shape.

---

## Prompt 2

Look at this code:

```js
class Media {
  constructor(title) {
    this.title = title;
  }
  play() { 
    return `Playing media: ${this.title}`; 
  }
}

class Song extends Media{
  constructor(title, artist) {
    super(title)
    this.artist = artist;
  }
  play() {
    return `♪${super.play()} song, by ${this.artist}`;
  }
}

class Podcast extends Media{
  constructor(title, host) {
    super(title)
    this.host = host;
  }
  play() {
    return `🎙️${super.play()} podcast, hosted by ${this.host}`;
  }
}

const playlist = [
  new Song("Thriller", "Michael Jackson"),
  new Podcast("CodeNewbie", "Saron Yitbarek"),
  new Media("voice-memo.mp3")
];

playlist.forEach(item => {
  console.log(item.play())
  });
```

This code works, but it has some problems. Answer the following:

1. Rewrite the `Song` and `Podcast` classes to use inheritance and polymorphism. What changes would you make?
2. After your changes, rewrite the `playlist.forEach()` loop. How does polymorphism simplify this code?
3. Explain what would happen if you wanted to add a new `Video` class. Compare how much work it would take with the original code versus your improved version.

## Response 2
I updated the **Song** and **Podcast** classes so they properly extend the **Media** class. By doing this, they both inherit the ``title`` property and the base ``play()`` method. Each subclass only needs to override ``play()`` to add the details that make it unique (like artist or host). This uses polymorphism because all media types share the same method name but customize its behavior.

In the ``playlist.forEach()`` loop, I simplified it so that each item just calls ``item.play()``. Since all classes follow the same interface and implement their own ``play()`` method, the loop doesn’t need to check what type of media it’s dealing with. Polymorphism makes the code cleaner and easier to maintain.

If we wanted to add a new **Video** class, it would be simple. We would create the class, extend Media, call ``super(title)``, and override the ``play()`` method. Then we just add a new instance to the playlist. We wouldn’t need to change the loop or add any extra logic. With the improved design, new media types fit in smoothly without updating existing code.
