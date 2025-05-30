import React from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Image,
  Button, 
  Avatar, 
  Flex, 
  Grid,
  GridItem,
  Input
} from '@chakra-ui/react';

const LiveStreamPage = () => {
  const [isLive, setIsLive] = React.useState(true);
  const [showChat, setShowChat] = React.useState(true);
  const [chatMessages, setChatMessages] = React.useState([
    { id: 1, username: 'أحمد', message: 'مرحباً بالجميع!', timestamp: '10:01' },
    { id: 2, username: 'سارة', message: 'البث رائع! 👏', timestamp: '10:02' },
    { id: 3, username: 'محمد', message: 'متى ستبدأ الفعالية؟', timestamp: '10:03' },
  ]);
  const [newMessage, setNewMessage] = React.useState('');
  const [hypeLevel, setHypeLevel] = React.useState(45);

  // محاكاة إرسال رسالة جديدة
  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const message = {
        id: chatMessages.length + 1,
        username: 'أنت',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages([...chatMessages, message]);
      setNewMessage('');
    }
  };

  // محاكاة إرسال تفاعل طاقة
  const handleEnergyReaction = (type) => {
    // زيادة مستوى الحماس بشكل عشوائي
    const increase = Math.floor(Math.random() * 5) + 1;
    setHypeLevel(prev => Math.min(prev + increase, 100));
    
    // إضافة رسالة تفاعل في الدردشة
    const reactionMessage = {
      id: chatMessages.length + 1,
      username: 'النظام',
      message: `أرسل "أنت" تفاعل ${type}!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setChatMessages([...chatMessages, reactionMessage]);
  };

  const bgColor = 'gray.50';
  const cardBgColor = 'white';

  return (
    <Box bg={bgColor} minH="100vh" color="white">
      <Container maxW="container.xl" py={5}>
        <Grid templateColumns={{ base: '1fr', lg: '3fr 1fr' }} gap={4}>
          {/* منطقة البث الرئيسية */}
          <GridItem>
            <VStack spacing={4} align="stretch">
              {/* فيديو البث */}
              <Box 
                position="relative" 
                bg="black" 
                height={{ base: '300px', md: '450px', lg: '600px' }}
                borderRadius="md"
                overflow="hidden"
              >
                <Image 
                  src="https://via.placeholder.com/1280x720" 
                  alt="Live stream" 
                  objectFit="cover"
                  w="100%"
                  h="100%"
                />
                
                {/* شارة البث المباشر */}
                {isLive && (
                  <Box 
                    position="absolute" 
                    top={4} 
                    left={4} 
                    bg="red.500"
                    color="white"
                    px={3}
                    py={1}
                    borderRadius="full"
                  >
                    مباشر
                  </Box>
                )}
                
                {/* معلومات البث */}
                <Box 
                  position="absolute" 
                  bottom={0} 
                  left={0} 
                  right={0} 
                  bg="rgba(0,0,0,0.7)" 
                  p={4}
                >
                  <Flex align="center">
                    <Avatar size="sm" src="https://via.placeholder.com/40" mr={3} />
                    <Box>
                      <Text fontWeight="bold">عنوان البث المباشر</Text>
                      <Text fontSize="sm">اسم المستخدم • 1.2K مشاهد</Text>
                    </Box>
                  </Flex>
                </Box>
              </Box>
              
              {/* مقياس الحماس */}
              <Box p={4} bg={cardBgColor} borderRadius="md">
                <Text mb={2}>مقياس الحماس</Text>
                <Box bg="gray.700" borderRadius="full" h="12px" overflow="hidden">
                  <Box 
                    bg="red.500" 
                    h="100%" 
                    w={`${hypeLevel}%`} 
                    transition="width 0.3s ease-in-out"
                  />
                </Box>
                <Flex justify="space-between" mt={1}>
                  <Text fontSize="xs">0</Text>
                  <Text fontSize="xs">50</Text>
                  <Text fontSize="xs">100</Text>
                </Flex>
              </Box>
              
              {/* أزرار التفاعل */}
              <Flex 
                justify="space-between" 
                bg={cardBgColor} 
                p={4} 
                borderRadius="md"
                wrap="wrap"
              >
                <Button 
                  colorScheme="yellow" 
                  variant="outline" 
                  onClick={() => handleEnergyReaction('حماس')}
                  mb={{ base: 2, md: 0 }}
                  flex={{ base: '1 0 45%', md: 'initial' }}
                >
                  حماس 🔥
                </Button>
                <Button 
                  colorScheme="green" 
                  variant="outline" 
                  onClick={() => handleEnergyReaction('دعم')}
                  mb={{ base: 2, md: 0 }}
                  flex={{ base: '1 0 45%', md: 'initial' }}
                >
                  دعم 👍
                </Button>
                <Button 
                  colorScheme="purple" 
                  variant="outline" 
                  onClick={() => handleEnergyReaction('إبداع')}
                  mb={{ base: 2, md: 0 }}
                  flex={{ base: '1 0 45%', md: 'initial' }}
                >
                  إبداع ✨
                </Button>
                <Button 
                  colorScheme="blue" 
                  variant="outline" 
                  onClick={() => handleEnergyReaction('ضحك')}
                  mb={{ base: 2, md: 0 }}
                  flex={{ base: '1 0 45%', md: 'initial' }}
                >
                  ضحك 😂
                </Button>
                <Button 
                  colorScheme="pink" 
                  variant="outline" 
                  onClick={() => handleEnergyReaction('إعجاب')}
                  flex={{ base: '1 0 45%', md: 'initial' }}
                >
                  إعجاب ❤️
                </Button>
              </Flex>
            </VStack>
          </GridItem>
          
          {/* منطقة الدردشة */}
          <GridItem>
            <Box 
              bg={cardBgColor} 
              borderRadius="md" 
              h={{ base: 'auto', lg: '600px' }}
              display="flex"
              flexDirection="column"
            >
              {/* رأس الدردشة */}
              <Flex 
                justify="space-between" 
                align="center" 
                p={4} 
                borderBottom="1px solid" 
                borderColor="gray.700"
              >
                <Text fontWeight="bold">دردشة البث المباشر</Text>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  onClick={() => setShowChat(!showChat)}
                >
                  {showChat ? 'إخفاء' : 'عرض'}
                </Button>
              </Flex>
              
              {/* محتوى الدردشة */}
              {showChat && (
                <>
                  <VStack 
                    spacing={3} 
                    align="stretch" 
                    p={4} 
                    overflowY="auto" 
                    flex="1"
                    css={{
                      '&::-webkit-scrollbar': {
                        width: '8px',
                      },
                      '&::-webkit-scrollbar-track': {
                        width: '10px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: 'gray.600',
                        borderRadius: '24px',
                      },
                    }}
                  >
                    {chatMessages.map((msg) => (
                      <Box key={msg.id} p={2} borderRadius="md" bg="gray.700">
                        <Flex align="center">
                          <Text fontWeight="bold" color={msg.username === 'أنت' ? 'blue.300' : msg.username === 'النظام' ? 'green.300' : 'white'}>
                            {msg.username}:
                          </Text>
                          <Text ml={1} fontSize="xs" color="gray.400">
                            {msg.timestamp}
                          </Text>
                        </Flex>
                        <Text>{msg.message}</Text>
                      </Box>
                    ))}
                  </VStack>
                  
                  {/* مدخل الرسائل */}
                  <HStack p={4} borderTop="1px solid" borderColor="gray.700">
                    <input
                      type="text"
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="اكتب رسالة..."
                      style={{
                        flex: 1,
                        padding: '8px 12px',
                        borderRadius: '4px',
                        backgroundColor: '#2D3748',
                        color: 'white',
                        border: 'none'
                      }}
                    />
                    <Button colorScheme="blue" onClick={handleSendMessage}>
                      إرسال
                    </Button>
                  </HStack>
                </>
              )}
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default LiveStreamPage;
