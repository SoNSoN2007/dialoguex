import React from 'react';
import { 
  Box, 
  Container, 
  VStack, 
  HStack, 
  Text, 
  Button, 
  Flex, 
  Progress,
  useColorModeValue,
  Center,
  Image
} from '@chakra-ui/react';

const StoryViewerPage = () => {
  const [currentStoryIndex, setCurrentStoryIndex] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [showBranchOptions, setShowBranchOptions] = React.useState(false);

  // بيانات تجريبية للقصة
  const story = {
    id: 1,
    user: {
      username: 'أحمد',
      profilePicture: 'https://via.placeholder.com/40'
    },
    createdAt: 'منذ ساعة',
    segments: [
      {
        id: 's1',
        mediaType: 'image',
        mediaUrl: 'https://via.placeholder.com/800x1200',
        textContent: 'مرحباً بكم في القصص التفاعلية من DialogueX!',
        duration: 5,
        branchOptions: []
      },
      {
        id: 's2',
        mediaType: 'image',
        mediaUrl: 'https://via.placeholder.com/800x1200',
        textContent: 'هل تريد معرفة المزيد عن ميزات التطبيق؟',
        duration: 5,
        branchOptions: [
          { id: 'b1', text: 'نعم، أريد معرفة المزيد' },
          { id: 'b2', text: 'لا، شكراً' }
        ]
      },
      {
        id: 's3',
        mediaType: 'image',
        mediaUrl: 'https://via.placeholder.com/800x1200',
        textContent: 'شكراً لمشاهدة القصة!',
        duration: 5,
        branchOptions: []
      }
    ]
  };

  // تأثير لتقدم القصة
  React.useEffect(() => {
    let timer;
    
    if (!paused && !showBranchOptions) {
      const segment = story.segments[currentStoryIndex];
      const duration = segment.duration * 1000;
      const interval = 100;
      let currentProgress = 0;
      
      timer = setInterval(() => {
        currentProgress += (interval / duration) * 100;
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          clearInterval(timer);
          
          // إذا كان المقطع الحالي يحتوي على خيارات تفرع
          if (segment.branchOptions && segment.branchOptions.length > 0) {
            setShowBranchOptions(true);
            setPaused(true);
          } else {
            // الانتقال إلى المقطع التالي
            if (currentStoryIndex < story.segments.length - 1) {
              setCurrentStoryIndex(currentStoryIndex + 1);
              setProgress(0);
            } else {
              // انتهت القصة
              console.log('انتهت القصة');
            }
          }
        }
      }, interval);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [currentStoryIndex, paused, showBranchOptions]);

  // التعامل مع الضغط على الشاشة
  const handleScreenTap = (e) => {
    if (showBranchOptions) return;
    
    const screenWidth = window.innerWidth;
    const clickX = e.clientX;
    
    // الضغط على الجانب الأيسر (السابق)
    if (clickX < screenWidth / 3) {
      if (currentStoryIndex > 0) {
        setCurrentStoryIndex(currentStoryIndex - 1);
        setProgress(0);
      }
    } 
    // الضغط على الجانب الأيمن (التالي)
    else if (clickX > (screenWidth / 3) * 2) {
      if (currentStoryIndex < story.segments.length - 1) {
        setCurrentStoryIndex(currentStoryIndex + 1);
        setProgress(0);
      } else {
        // انتهت القصة
        console.log('انتهت القصة');
      }
    }
    // الضغط في الوسط (إيقاف/تشغيل)
    else {
      setPaused(!paused);
    }
  };

  // التعامل مع اختيار تفرع
  const handleBranchSelection = (branchId) => {
    setShowBranchOptions(false);
    setPaused(false);
    
    // في التطبيق الحقيقي، سيتم تحديد المقطع التالي بناءً على الاختيار
    // هنا نفترض أننا سننتقل إلى المقطع التالي مباشرة
    if (currentStoryIndex < story.segments.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setProgress(0);
    }
  };

  const currentSegment = story.segments[currentStoryIndex];
  const bgColor = 'black';
  const textBgColor = 'rgba(0, 0, 0, 0.5)';

  return (
    <Box 
      height="100vh" 
      width="100%" 
      bg={bgColor} 
      position="relative"
      onClick={handleScreenTap}
    >
      {/* شريط التقدم */}
      <HStack spacing={1} p={2} position="absolute" top={0} left={0} right={0} zIndex={10}>
        {story.segments.map((segment, index) => (
          <Box
            key={segment.id}
            height="4px"
            bg="gray.600"
            flex={1}
            borderRadius="full"
            overflow="hidden"
          >
            <Box 
              height="100%" 
              width={`${index === currentStoryIndex ? progress : (index < currentStoryIndex ? 100 : 0)}%`}
              bg="white"
              transition="width 0.1s linear"
            />
          </Box>
        ))}
      </HStack>
      
      {/* معلومات المستخدم */}
      <Flex 
        position="absolute" 
        top={10} 
        left={0} 
        right={0} 
        p={4} 
        alignItems="center"
        zIndex={10}
      >
        <Image
          src={story.user.profilePicture}
          alt={story.user.username}
          borderRadius="full"
          boxSize="40px"
          mr={3}
        />
        <Box>
          <Text color="white" fontWeight="bold">{story.user.username}</Text>
          <Text color="whiteAlpha.800" fontSize="xs">{story.createdAt}</Text>
        </Box>
        <Button 
          ml="auto" 
          size="sm" 
          variant="ghost" 
          color="white"
          onClick={(e) => {
            e.stopPropagation();
            console.log('إغلاق القصة');
          }}
        >
          X
        </Button>
      </Flex>
      
      {/* محتوى القصة */}
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        right={0} 
        bottom={0} 
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Image
          src={currentSegment.mediaUrl}
          alt="Story content"
          objectFit="cover"
          w="100%"
          h="100%"
        />
        
        {/* نص القصة */}
        {currentSegment.textContent && (
          <Box 
            position="absolute" 
            bottom={showBranchOptions ? 150 : 50} 
            left={0} 
            right={0} 
            p={4}
            bg={textBgColor}
          >
            <Text color="white" textAlign="center" fontSize="lg">
              {currentSegment.textContent}
            </Text>
          </Box>
        )}
        
        {/* مؤشر الإيقاف المؤقت */}
        {paused && !showBranchOptions && (
          <Center 
            position="absolute" 
            top={0} 
            left={0} 
            right={0} 
            bottom={0}
            bg="rgba(0, 0, 0, 0.3)"
          >
            <Text fontSize="5xl" color="white">II</Text>
          </Center>
        )}
        
        {/* خيارات التفرع */}
        {showBranchOptions && currentSegment.branchOptions && (
          <VStack 
            position="absolute" 
            bottom={50} 
            left={0} 
            right={0} 
            spacing={3}
            p={4}
          >
            {currentSegment.branchOptions.map((option) => (
              <Button 
                key={option.id}
                colorScheme="blue" 
                size="lg" 
                width="80%"
                onClick={(e) => {
                  e.stopPropagation();
                  handleBranchSelection(option.id);
                }}
              >
                {option.text}
              </Button>
            ))}
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default StoryViewerPage;
