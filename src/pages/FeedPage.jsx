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
  GridItem
} from '@chakra-ui/react';

const FeedPage = () => {
  // بيانات تجريبية للقصص
  const stories = [
    { id: 1, username: 'أحمد', profilePic: 'https://via.placeholder.com/40', hasUnseenStory: true },
    { id: 2, username: 'سارة', profilePic: 'https://via.placeholder.com/40', hasUnseenStory: false },
    { id: 3, username: 'محمد', profilePic: 'https://via.placeholder.com/40', hasUnseenStory: true },
    { id: 4, username: 'فاطمة', profilePic: 'https://via.placeholder.com/40', hasUnseenStory: false },
    { id: 5, username: 'خالد', profilePic: 'https://via.placeholder.com/40', hasUnseenStory: true },
  ];

  // بيانات تجريبية للمنشورات
  const posts = [
    { 
      id: 1, 
      username: 'أحمد', 
      profilePic: 'https://via.placeholder.com/40', 
      postImage: 'https://via.placeholder.com/600x400',
      caption: 'هذا منشور تجريبي للعرض في صفحة الرئيسية',
      likesCount: 120,
      commentsCount: 14,
      timestamp: 'منذ ساعتين'
    },
    { 
      id: 2, 
      username: 'سارة', 
      profilePic: 'https://via.placeholder.com/40', 
      postImage: 'https://via.placeholder.com/600x400',
      caption: 'استمتع بتجربة تطبيق DialogueX على الويب! هذه نسخة تجريبية للمستخدمين الذين لا يملكون هواتف ذكية.',
      likesCount: 84,
      commentsCount: 7,
      timestamp: 'منذ 4 ساعات'
    },
  ];

  const bgColor = 'gray.50';
  const cardBgColor = 'white';

  return (
    <Container maxW="container.md" py={5}>
      <VStack spacing={6} align="stretch">
        {/* قسم القصص */}
        <Box 
          p={4} 
          borderWidth="1px" 
          borderRadius="lg" 
          bg={cardBgColor}
          overflowX="auto"
          css={{
            '&::-webkit-scrollbar': {
              height: '8px',
            },
            '&::-webkit-scrollbar-track': {
              height: '10px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: 'gray.300',
              borderRadius: '24px',
            },
          }}
        >
          <HStack spacing={4}>
            {/* قصتي */}
            <VStack spacing={1} minW="70px" align="center">
              <Box position="relative">
                <Avatar size="md" src="https://via.placeholder.com/40" />
                <Box 
                  position="absolute" 
                  bottom="0" 
                  right="0" 
                  bg="blue.500" 
                  borderRadius="full" 
                  w="20px" 
                  h="20px" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  border="2px solid white"
                >
                  <Text fontSize="xs" color="white">+</Text>
                </Box>
              </Box>
              <Text fontSize="xs" textAlign="center">قصتي</Text>
            </VStack>

            {/* قصص الآخرين */}
            {stories.map(story => (
              <VStack key={story.id} spacing={1} minW="70px" align="center">
                <Avatar 
                  size="md" 
                  src={story.profilePic} 
                  name={story.username}
                  border={story.hasUnseenStory ? "2px solid" : "none"}
                  borderColor="blue.500"
                />
                <Text fontSize="xs" textAlign="center">{story.username}</Text>
              </VStack>
            ))}
          </HStack>
        </Box>

        {/* المنشورات */}
        {posts.map(post => (
          <Box 
            key={post.id} 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden"
            bg={cardBgColor}
          >
            {/* رأس المنشور */}
            <Flex p={4} alignItems="center">
              <Avatar size="sm" src={post.profilePic} name={post.username} mr={3} />
              <Box>
                <Text fontWeight="bold">{post.username}</Text>
              </Box>
            </Flex>

            {/* صورة المنشور */}
            <Image src={post.postImage} alt="Post image" w="100%" />

            {/* أزرار التفاعل */}
            <HStack p={4} spacing={4}>
              <Button variant="ghost" size="sm">إعجاب</Button>
              <Button variant="ghost" size="sm">تعليق</Button>
              <Button variant="ghost" size="sm">مشاركة</Button>
            </HStack>

            {/* معلومات المنشور */}
            <Box px={4} pb={4}>
              <Text fontWeight="bold" mb={1}>{post.likesCount} إعجاب</Text>
              <Text>
                <Text as="span" fontWeight="bold" mr={1}>{post.username}</Text>
                {post.caption}
              </Text>
              <Text fontSize="sm" color="gray.500" mt={1}>
                عرض جميع التعليقات ({post.commentsCount})
              </Text>
              <Text fontSize="xs" color="gray.500" mt={2}>
                {post.timestamp}
              </Text>
            </Box>
          </Box>
        ))}

        {/* زر إنشاء منشور جديد */}
        <Button 
          position="fixed" 
          bottom="20px" 
          right="20px" 
          colorScheme="blue" 
          borderRadius="full" 
          width="60px" 
          height="60px" 
          fontSize="24px"
        >
          +
        </Button>
      </VStack>
    </Container>
  );
};

export default FeedPage;
