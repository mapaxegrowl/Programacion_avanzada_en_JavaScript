// Define las clases de los animales
class Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      this._nombre = nombre;
      this._edad = edad;
      this._img = img;
      this._comentarios = comentarios;
      this._sonido = sonido;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    get edad() {
      return this._edad;
    }
  
    get img() {
      return this._img;
    }
  
    get comentarios() {
      return this._comentarios;
    }
  
    set comentarios(comentarios) {
      this._comentarios = comentarios;
    }
  };
  
 class Leon extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Rugir() {
      return this._sonido;
    }
  }
  
 class Lobo extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Aullar() {
      return this._sonido;
    }
  }
  
 class Oso extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Gruñir() {
      return this._sonido;
    }
  }
  
 class Serpiente extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Sisear() {
      return this._sonido;
    }
  }
  
  class Aguila extends Animal {
    constructor(nombre, edad, img, comentarios, sonido) {
      super(nombre, edad, img, comentarios, sonido);
    }
    Chillar() {
      return this._sonido;
    }
  };

  export { Aguila, Serpiente, Oso, Lobo, Leon };
  

