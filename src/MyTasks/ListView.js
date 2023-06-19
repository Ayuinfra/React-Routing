import React, { useState } from 'react';
import {Box,List,ListItem,ListItemAvatar,ListItemText,Avatar,TextField,} from '@mui/material';

const messages = [
  { id: 1, name: 'Ashmit'},
  { id: 2, name: 'Vishal' },
  { id: 3, name: 'Prajwal' },
  
];

const ListView = () => {
  const [selectedId, setSelectedId] = useState(null);
  const [messageInput, setMessageInput] = useState('');

  const handleNameClick = (id) => {
    setSelectedId(id);
  };

  const handleSendMessage = () => {
    if (messageInput.trim() !== '') {
      
   
    }
  };

  return (
    <Box display="flex" height="100vh" bgcolor="#F4F1EB">
      <Box width="40%" p={2} bgcolor="#F4F1EB">
        <List>
          {messages.map((message) => (
            <ListItem
              key={message.id}
              alignItems="flex"
              Selected={selectedId === message.id}
              onClick={() => handleNameClick(message.id)}
              
            >
              <ListItemAvatar>
                <Avatar />
              </ListItemAvatar>
              <ListItemText
                primary={message.name}
                primaryTypographyProps={{
                  noWrap: true,
                  style: { textOverflow: 'ellipsis', overflow: 'hidden' },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Box>
      <Box flex={1} p={2} bgcolor="#ffffff">
        {selectedId && (
          <Box
            display="flex"
            flexDirection="column"
            height="100%"
            border="1px solid #ccc"
            borderRadius="8px"
            overflow="hidden"
          >
            <Box flexGrow={1} p={2} overflow="auto">
              {messageInput}
            </Box>
            <Box p={2} display="flex">
              <TextField
                fullWidth
                variant="outlined"
                label="Type a message"
                defaultValue={messageInput}
                onBlur={(e) => setMessageInput(e.target.value)}
              />
              <button onClick={handleSendMessage}>Send</button>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default ListView;
