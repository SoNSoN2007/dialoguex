import React from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  Heading, 
  Text, 
  Image, 
  SimpleGrid, 
  Flex,
  Button,
  Link,
  Divider
} from '@chakra-ui/react';

const AboutPage = () => {
  const bgColor = 'white';
  const cardBgColor = 'gray.50';

  return (
    <Container maxW="container.lg" py={8}>
      <VStack spacing={8} align="stretch">
        {/* رأس الصفحة */}
        <Box textAlign="center" p={5}>
          <Heading as="h1" size="2xl" mb={4}>حول DialogueX</Heading>
          <Text fontSize="xl">منصة التواصل الاجتماعي العربية الأولى للمحادثات التفاعلية والقصص المتفرعة</Text>
        </Box>
        
        {/* قسم الرؤية والرسالة */}
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={6}>
          <GridItem>
            <Box p={6} bg={cardBgColor} borderRadius="lg" height="100%">
              <Heading as="h2" size="lg" mb={4}>رؤيتنا</Heading>
              <Text>
                نسعى لإنشاء منصة تواصل اجتماعي عربية تتيح للمستخدمين التعبير عن أنفسهم بطرق إبداعية وتفاعلية، وتعزز التواصل الهادف والمحتوى الإيجابي.
              </Text>
            </Box>
          </GridItem>
          <GridItem>
            <Box p={6} bg={cardBgColor} borderRadius="lg" height="100%">
              <Heading as="h2" size="lg" mb={4}>رسالتنا</Heading>
              <Text>
                توفير منصة آمنة وملهمة تمكّن المستخدمين من إنشاء ومشاركة القصص التفاعلية والمحتوى الإبداعي، وبناء مجتمع رقمي إيجابي يحترم التنوع الثقافي واللغوي.
              </Text>
            </Box>
          </GridItem>
        </Grid>
        
        {/* قسم الميزات الرئيسية */}
        <Box p={6} bg={cardBgColor} borderRadius="lg">
          <Heading as="h2" size="lg" mb={6} textAlign="center">الميزات الرئيسية</Heading>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr', lg: '1fr 1fr 1fr' }} gap={6}>
            <GridItem>
              <VStack align="center" p={4}>
                <Box 
                  w="80px" 
                  h="80px" 
                  borderRadius="full" 
                  bg="blue.100" 
                  color="blue.500" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  fontSize="3xl"
                  mb={3}
                >
                  📖
                </Box>
                <Heading as="h3" size="md">القصص التفاعلية</Heading>
                <Text textAlign="center">
                  قصص متفرعة تتيح للمستخدمين اختيار مسارات مختلفة والتأثير على تطور الأحداث.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="center" p={4}>
                <Box 
                  w="80px" 
                  h="80px" 
                  borderRadius="full" 
                  bg="red.100" 
                  color="red.500" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  fontSize="3xl"
                  mb={3}
                >
                  🎬
                </Box>
                <Heading as="h3" size="md">البث المباشر</Heading>
                <Text textAlign="center">
                  بث مباشر تفاعلي مع مقياس الحماس وتفاعلات الطاقة لتعزيز التواصل المباشر.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="center" p={4}>
                <Box 
                  w="80px" 
                  h="80px" 
                  borderRadius="full" 
                  bg="purple.100" 
                  color="purple.500" 
                  display="flex" 
                  alignItems="center" 
                  justifyContent="center"
                  fontSize="3xl"
                  mb={3}
                >
                  🤖
                </Box>
                <Heading as="h3" size="md">المساعد الذكي</Heading>
                <Text textAlign="center">
                  مساعد ذكي يساعد المستخدمين في استكشاف المنصة والإجابة على استفساراتهم.
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </Box>
        
        {/* قسم الفريق */}
        <Box p={6} bg={cardBgColor} borderRadius="lg">
          <Heading as="h2" size="lg" mb={6} textAlign="center">فريق التطوير</Heading>
          <Text textAlign="center" mb={6}>
            تم تطوير DialogueX بواسطة فريق من المطورين والمصممين المتحمسين لإنشاء تجربة تواصل اجتماعي فريدة للمستخدمين العرب.
          </Text>
          <Flex justify="center" wrap="wrap" gap={4}>
            <Box p={4} textAlign="center" width={{ base: '100%', md: 'auto' }}>
              <Heading as="h3" size="md">المطورون</Heading>
              <Text>فريق تطوير DialogueX</Text>
            </Box>
            <Box p={4} textAlign="center" width={{ base: '100%', md: 'auto' }}>
              <Heading as="h3" size="md">المصممون</Heading>
              <Text>فريق تصميم DialogueX</Text>
            </Box>
            <Box p={4} textAlign="center" width={{ base: '100%', md: 'auto' }}>
              <Heading as="h3" size="md">مديرو المحتوى</Heading>
              <Text>فريق المحتوى DialogueX</Text>
            </Box>
          </Flex>
        </Box>
        
        {/* قسم التواصل */}
        <Box p={6} bg={cardBgColor} borderRadius="lg">
          <Heading as="h2" size="lg" mb={6} textAlign="center">تواصل معنا</Heading>
          <VStack spacing={4}>
            <Text textAlign="center">
              نرحب بملاحظاتكم واقتراحاتكم لتحسين منصة DialogueX!
            </Text>
            <Flex justify="center" gap={6} wrap="wrap">
              <Button colorScheme="blue">البريد الإلكتروني</Button>
              <Button colorScheme="twitter">تويتر</Button>
              <Button colorScheme="facebook">فيسبوك</Button>
              <Button colorScheme="pink">انستغرام</Button>
            </Flex>
          </VStack>
        </Box>
        
        {/* تذييل الصفحة */}
        <Box textAlign="center" p={4}>
          <Text>© 2025 DialogueX - جميع الحقوق محفوظة</Text>
          <Flex justify="center" mt={2} gap={4}>
            <Link href="#" fontSize="sm">سياسة الخصوصية</Link>
            <Link href="#" fontSize="sm">شروط الاستخدام</Link>
            <Link href="#" fontSize="sm">المساعدة</Link>
          </Flex>
        </Box>
      </VStack>
    </Container>
  );
};

export default AboutPage;
