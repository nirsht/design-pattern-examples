from abc import ABC, abstractmethod


class Product(ABC):
    @abstractmethod
    def operation() -> str:
        pass


class Creator(ABC):
    @abstractmethod
    def factoryMethod(self) -> Product:
        pass

    def someOperation(self) -> str:
        return f"This wrapper for some operation {self.factoryMethod().operation()}"


class ConcreteCreator1(Creator):
    def factoryMethod(self) -> Product:
        return ConcreteProduct1()


class ConcreteCreator2(Creator):
    def factoryMethod(self) -> Product:
        return ConcreteProduct1()


class ConcreteProduct1(Product):
    def operation(self) -> str:
        return "Implementation of product1"


class ConcreteProduct2(Product):
    def operation(self) -> str:
        return "Implementation of product2"


concrete_creator = ConcreteCreator1()
print(concrete_creator.someOperation())
