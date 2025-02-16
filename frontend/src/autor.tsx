import { Box, Button, Container, Typography } from "@mui/material";

export default function Footer({ show }: { show: boolean }) {
  return (
    show && (
      <Box
        component="footer"
        sx={{
          marginTop: "20px",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            sx={{
              paddingBottom: "10px",
            }}
          >
            下载WakeUp课程表
          </Typography>
          <Button
            variant="contained"
            sx={{
              mx: 1,
              bgcolor: "var(--primary-100)",
            }}
            onClick={() =>
              window.open("https://cdn1.d5v.cc/CDN/Project/Course/wakeup.apk")
            }
          >
            安卓
          </Button>
          <Button
            variant="contained"
            sx={{
              mx: 1,
              bgcolor: "var(--primary-100)",
            }}
            onClick={() =>
              window.open(
                "appmarket://details?id=com.suda.yzune.wakeupschedule.hmos"
              )
            }
          >
            鸿蒙
          </Button>
          <Button
            variant="contained"
            sx={{
              mx: 1,
              bgcolor: "var(--primary-100)",
            }}
            onClick={() =>
              window.open(
                "https://apps.apple.com/cn/app/wakeup%E8%AF%BE%E7%A8%8B%E8%A1%A8/id1553402284"
              )
            }
          >
            IOS
          </Button>
          <Typography
            sx={{
              marginTop: "10px",
              fontSize: "13px",
            }}
          >
            <a href="/admin/login" style={{ marginLeft: "10px" }}>
              管理后台
            </a>
          </Typography>
        </Container>
      </Box>
    )
  );
}
