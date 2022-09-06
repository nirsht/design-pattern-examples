interface Product {
  operation(): string;
}

class ConcreteProduct1 implements Product {
  operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

class ConcreteProduct2 implements Product {
  operation(): string {
    return "{Result of the ConcreteProduct1}";
  }
}

abstract class Creator {
  public abstract factoryMethod(): Product;
}
