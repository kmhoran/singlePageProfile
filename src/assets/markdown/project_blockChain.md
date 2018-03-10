# Block Chain

Everyone and their mom is talking about BitCoin these days.

<br/>

[...]

<br/>

### Goals

1. Create a simple but complete demonstration of how the many moving parts of a disributed ledger fit together.

2. Demonstrate how proof of work might be verified.

<br/>

The security behind a blockchain lies in the fact that each block or node in the chain includes a cryptographic hash of all of its contents (including the has produced by the previous block). This sets the requirements for producing a valid block quite high, while making 3rd party validation of the ledger all but trivial. Each block in this first iteration has a nonce with a value of zero. A nonce is random integer used to change the final value of the hash. Though kinda pointless at this stage, we'll see the nonce make another appearance when we talk about proof of work.

<br/>

```python
class Block:
    def __init__(self, id, timestamp, data, previous_hash):
        self.id = id
        self.timestamp = timestamp
        self.data = data
        self.previous_hash = previous_hash
        self.nonce = 0

    @property
    def hash(self):
        sha = hashlib.sha256()

        sha.update(str(self.id).encode('utf-8') +
                   str(self.timestamp).encode('utf-8')+ 
                   str(self.data).encode('utf-8') +
                   str(self.previous_hash).encode('utf-8') +
                   str(self.nonce).encode('utf-8'))

        return sha.hexdigest()
```
<br/>



Because each Block in the Chain requires information from the node coming before it, a Chain must create a default "Origin Block" before it can start adding more blocks to the ledger.

<br/>

```python
class Chain:

    def __init__(self):
        self.ledger = []
        self.id = str(uuid.uuid4())
        self.last_updated = datetime.now()
        self.spawn_origin_block()


    @staticmethod
    def origin_data():
        return "Origin Block" 


    def spawn_origin_block(self):

        if(len(self.ledger) == 0):
            origin = Block(id=0, 
                           timestamp= datetime.now,
                           data= Chain.origin_data(),
                           previous_hash="",
                           workDifficulty= 0)
        
            self.ledger.append(origin)


    def add_block(self, data):
        temp_ledger = list(self.ledger)

        last_block = temp_ledger[-1]
        new_block = Block(id= last_block.id + 1,
                          timestamp= datetime.now(),
                          data=data,
                          previous_hash = last_block.hash)
        
        temp_ledger.append(new_block)

        self.try_replace_ledger(temp_ledger)  

    
    def try_replace_ledger(self, new_ledger):
        
        if len(new_ledger) <= len(self.ledger):
            return False

        if not self.is_ledger_valid(new_ledger):
            return False
        
        self.ledger = new_ledger
        self.last_updated = datetime.now()
        return True          
```

<br/>

And with that, we have all we need to get our BlockChain up and running (we'll leave the peer-to-peer communication for later). But what about our proof of work? Why are the shelves at Fry's bare? 

<br/>

To create a barrier to entry, manufacture scarcity, and prevent any single miner from influencing the ledger too heavily, cryptocurrencies require blocks to prove that they made a significant investment (through time and energy). They do this by making the miners do math. And though the problems BitCoin and the like dole out are a bit more sophisticated than the one in this project, they all center around "cracking" a cryptographic hash. In other words, where H is some hash function, and y=H(x) the miner must solve for x given y.

<br/>

For this project, Blocks must calculate a nonce that will produce a hash that begins with a given number of zeros. 

<br/>

```python
class Block:
    ...
    def calculate_nonce(self):
        while(str(self.hash)[0:self.workDifficulty] != '0' * self.workDifficulty):
            self.nonce += 1
``` 

<br/>

The advantage of using this type of "hash cracking" to provide a proof of work is that it is very easy to verify. This means that while a miner has to invest considerable resources to produce a valid proof of work, a chain can quickly cycle through all the blocks in a ledger to verify their validity.

<br/>

```python
class Chain:
    ...
    def is_ledger_valid(self, ledger):
        if(ledger is None or len(ledger) == 0):
            return false

        for i in range(len(ledger)-1, -1,-1):
            if i == 0:
                if ledger[i].data != Chain.origin_data():
                    return False
                continue

            if ledger[i].previous_hash != ledger[i-1].hash:
                return False
            
            if not self.block_has_valid_proof_of_work(ledger[i]):
                return False
        
        return True
    

    
    def block_has_valid_proof_of_work(self, block):

        # Proof of work must be up to this chain's standard
        if self.difficulty > block.workDifficulty:
            return False
        
        # Block must meet its own proof of work standard
        if str(block.hash)[0:block.workDifficulty] != '0' * block.workDifficulty:
            return False

        return True
```
<br/>
The thing that struck me the most was how dramatically simple and effective this proof of work is. As the difficulty value increased, the work required by a miner grows exponentially. A level 4 difficulty took my computer a couple seconds to mine three blocks. At level 15, the machine had been working for a half hour before I finally killed it. Not one block mined.

<br/>

### Moving Forward

All in all, this was a fun foray into one of 2018's hottest technologies. I am really exited for the where we're going to see this in the years to come. Personally, I'd like to try implementing blockchain in some type of IoT or home automation project. I love the idea of independent peers being able to draw from and add to a collective ledger, like machines sharing a collective history. It's a radical thing. 