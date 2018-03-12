## .Net RabbitMQ Client

![alt text](./assets/images/rabbitmq-logo-white.png "Logo Title Text 1")

Microservices are all about seperating the concerns and logic from the different domains of your system. By maintaining strictky defined scope, these services keep the context of any domain absolutely clear and prevent future misuse by developers new to the project. Keeping with the Unix philosophy of doing one thing, and doing it well, microservices are strictly autonymous and know nothing else of the world. 

<br/>


The problem with maintaining a system of these autonymous, distributed services is managing communication between them. While there are many srategies for acheiving this (such as RESTful request/response) [many prefer](https://www.oreilly.com/ideas/what-is-a-reactive-microservice) to use the truly asyncronous, event-based communication that RabbitMQ and other message brokers provide.


<br/>
![alt text](./assets/images/blocking-request.jpg "Http blocking")
<br/>


The complete setup for RabbitMQ is outlined in their [Getting Started/ Download](https://www.rabbitmq.com/install-windows.html) section. For C# programmers, this largely involves, installing [Erlang](http://www.erlang.org), running the RabbitMQ server, and installing the RabbitMQ Client (available through Nuget) -- again all outlined on the RabbitMQ site. There are several different configurations detailed in their Getting started tutorial (each differing only very slightly from the others), but my team has found that the *Topic Exchange* fits our needs the best.

<br/>

Once running, a message broker acts like tha mailroom for a distributed system. Incoming mail created by a *Producer* is sent to a an exchange with a given *Routing Key* or *Topic*. These topics are addresses which *Consumers* of our mail use to subscribe to a given *Queue* or channel. 

<br/>

![alt text](./assets/images/RabbitMq_Diagram_1.jpg "Logo Title Text 1")

<br/>
```csharp
  for (int i = 0 ; i < 10; i++)
   {
     // Code to execute.
   }
```

More to come ...