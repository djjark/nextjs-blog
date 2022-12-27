import { useState } from "react";
import { Button, Flex, ListItem, UnorderedList, Text, Input } from "@chakra-ui/react";
import { useUser } from '@auth0/nextjs-auth0';



function ShoppingList(props) {
  let startingItems = props.items.map(a => {return a.item})
  if (startingItems == "" )
    startingItems = []
  else
    startingItems = startingItems[0]
  const [tasks, setTasks] = useState(startingItems);
  const [Item, setItem] = useState("");
  const { user, isLoading } = useUser();
  
  var user_id = ""
  if (user)
    user_id = user.sub.split("|")[1]
  
  function removeItem(taskName){
    let k = tasks.filter(task=>{
      return task != taskName;
    })
    setTasks(k)
    const ItemData = {
      item: k,
      hora: new Date().getTime(),
      user_id: user_id
    };
    props.onAddItem(ItemData)
  }
  function AddItem() {

    if(Item != "" && !tasks.includes(Item)){
      let temp = tasks;
      temp.push(Item);
      setTasks(temp);
      setItem("");

      const ItemData = {
        item: temp,
        hora: new Date().getTime(),
        user_id: user_id
      };
      props.onAddItem(ItemData)
    }
  }
  // const a = props.meetups.sort((a, b) => b.hora - a.hora)
  return (
    <Flex
      justifyContent="center">
      <UnorderedList>
        {tasks.map((task) => {
          return (
            <ListItem key={task.index}>
              {task}
              <Button
                ml={10}
                onClick={()=>{
                  removeItem(task);
                }}>Remove Item
              </Button>


             </ListItem>
          );
        })}
      </UnorderedList>
        <Input placeholder="Item Name" value={Item} onChange={(e)=>{
          setItem(e.target.value);
        }}
        ></Input>
      <Button onClick={AddItem}>Add Item</Button>
    </Flex>
  );
}

export default ShoppingList;
