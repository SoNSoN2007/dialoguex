import React, { useState } from 'react';
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
  GridItem
} from '@chakra-ui/react';

const ProfilePage = () => {
  const bgColor = 'gray.50';
  const cardBgColor = 'white';

  // بيانات تجريبية للمستخدم
  const user = {
    username: 'أحمد محمد',
    bio: 'مرحباً! أنا أحمد، مستخدم لتطبيق DialogueX. أحب مشاركة القصص التفاعلية والتواصل مع الآخرين.',
    profilePicture: 'https://via.placeholder.com/150',
    followers: 1250,
    following: 420,
    posts: 86
  };

  // بيانات تجريبية للمنشورات
  const posts = [
    { 
      id: 1, 
      image: 'https://via.placeholder.com/300',
      likes: 45,
      comments: 12
    },
    { 
      id: 2, 
      image: 'https://via.placeholder.com/300',
      likes: 32,
      comments: 8
    },
    { 
      id: 3, 
      image: 'https://via.placeholder.com/300',
      likes: 67,
      comments: 15
    },
    { 
      id: 4, 
      image: 'https://via.placeholder.com/300',
      likes: 28,
      comments: 5
    },
    { 
      id: 5, 
      image: 'https://via.placeholder.com/300',
      likes: 53,
      comments: 9
    },
    { 
      id: 6, 
      image: 'https://via.placeholder.com/300',
      likes: 41,
      comments: 7
    }
  ];

  // حالة لتتبع التبويب النشط
  const [activeTab, setActiveTab] = useState('posts');

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={6} align="stretch">
        {/* معلومات الملف الشخصي */}
        <Box p={6} bg={cardBgColor} borderRadius="lg" boxShadow="sm">
          <Flex 
            direction={{ base: 'column', md: 'row' }} 
            align={{ base: 'center', md: 'start' }}
          >
            {/* صورة الملف الشخصي */}
            <Avatar
              size="2xl"
              src={user.profilePicture}
              name={user.username}
              mb={{ base: 4, md: 0 }}
              mr={{ md: 6 }}
            />
            
            {/* معلومات المستخدم */}
            <Box flex="1">
              <Flex 
                direction={{ base: 'column', sm: 'row' }} 
                justify={{ sm: 'space-between' }}
                align={{ base: 'center', sm: 'start' }}
                mb={4}
              >
                <Box mb={{ base: 2, sm: 0 }} textAlign={{ base: 'center', sm: 'start' }}>
                  <Text fontSize="2xl" fontWeight="bold">{user.username}</Text>
                  <Text color="gray.500">@ahmed_m</Text>
                </Box>
                <Button colorScheme="blue">تعديل الملف الشخصي</Button>
              </Flex>
              
              {/* إحصائيات المستخدم */}
              <Flex 
                justify={{ base: 'center', sm: 'start' }} 
                mb={4}
                wrap="wrap"
              >
                <Box mr={6} textAlign="center">
                  <Text fontWeight="bold">{user.posts}</Text>
                  <Text color="gray.500">منشور</Text>
                </Box>
                <Box mr={6} textAlign="center">
                  <Text fontWeight="bold">{user.followers}</Text>
                  <Text color="gray.500">متابع</Text>
                </Box>
                <Box textAlign="center">
                  <Text fontWeight="bold">{user.following}</Text>
                  <Text color="gray.500">يتابع</Text>
                </Box>
              </Flex>
              
              {/* نبذة عن المستخدم */}
              <Text>{user.bio}</Text>
            </Box>
          </Flex>
        </Box>
        
        {/* أزرار التبويبات المخصصة */}
        <Flex borderBottom="1px" borderColor="gray.200" mb={4}>
          <Button 
            variant={activeTab === 'posts' ? 'solid' : 'ghost'} 
            onClick={() => setActiveTab('posts')}
            borderRadius="0"
            borderBottom={activeTab === 'posts' ? '2px solid' : 'none'}
            borderColor="blue.500"
            flex="1"
          >
            المنشورات
          </Button>
          <Button 
            variant={activeTab === 'stories' ? 'solid' : 'ghost'} 
            onClick={() => setActiveTab('stories')}
            borderRadius="0"
            borderBottom={activeTab === 'stories' ? '2px solid' : 'none'}
            borderColor="blue.500"
            flex="1"
          >
            القصص
          </Button>
          <Button 
            variant={activeTab === 'live' ? 'solid' : 'ghost'} 
            onClick={() => setActiveTab('live')}
            borderRadius="0"
            borderBottom={activeTab === 'live' ? '2px solid' : 'none'}
            borderColor="blue.500"
            flex="1"
          >
            البث المباشر
          </Button>
        </Flex>
        
        {/* محتوى التبويبات */}
        {activeTab === 'posts' && (
          <Box p={4}>
            <Grid 
              templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} 
              gap={4}
            >
              {posts.map(post => (
                <GridItem key={post.id}>
                  <Box position="relative" overflow="hidden" borderRadius="md">
                    <Image 
                      src={post.image} 
                      alt={`منشور ${post.id}`} 
                      w="100%" 
                      h="auto"
                      aspectRatio="1/1"
                      objectFit="cover"
                    />
                    <Box 
                      position="absolute" 
                      bottom={0} 
                      left={0} 
                      right={0} 
                      bg="rgba(0,0,0,0.6)" 
                      p={2}
                      opacity={0}
                      _hover={{ opacity: 1 }}
                      transition="opacity 0.2s"
                    >
                      <Flex justify="space-around">
                        <HStack>
                          <Text color="white">❤️</Text>
                          <Text color="white">{post.likes}</Text>
                        </HStack>
                        <HStack>
                          <Text color="white">💬</Text>
                          <Text color="white">{post.comments}</Text>
                        </HStack>
                      </Flex>
                    </Box>
                  </Box>
                </GridItem>
              ))}
            </Grid>
          </Box>
        )}
        
        {activeTab === 'stories' && (
          <Box p={4}>
            <VStack spacing={4} align="center">
              <Text>لا توجد قصص لعرضها حالياً.</Text>
              <Button colorScheme="blue">إنشاء قصة جديدة</Button>
            </VStack>
          </Box>
        )}
        
        {activeTab === 'live' && (
          <Box p={4}>
            <VStack spacing={4} align="center">
              <Text>لا توجد بثوث مباشرة سابقة.</Text>
              <Button colorScheme="red">بدء بث مباشر جديد</Button>
            </VStack>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default ProfilePage;
