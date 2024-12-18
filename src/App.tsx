import { Box, Container, Typography, Chip, Grid } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

function App() {
  return (
    <Container sx={{ color: "white", py: 8 }}>
      <Grid container spacing={6}>
        {/* 左側のカード */}
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              bgcolor: "#2A2A2A",
              borderRadius: 4,
              color: "white",
              position: "relative",
              overflow: "hidden",
              transition: "all 0.5s",
              width: "100%",
              height: "600px",
              "&:hover": {
                boxShadow: "0 0 20px 1px rgba(180, 255, 57, 0.3)",
                bgcolor: "#FF5733",
                "& .profile-blob": {
                  height: 0,
                },
                "& .profile-image": {
                  width: "100%",
                  height: "70%",
                  borderRadius: "10px 10px 0 0",
                  margin: "0 auto",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "#2A2A2A",
                  zIndex: 99,
                },
                "& .profile-content": {
                  opacity: 0,
                },
                "& .social-icons": {
                  opacity: 1,
                  bottom: "15px",
                },
              },
            }}
          >
            <Box
              className="profile-blob"
              sx={{
                height: "10px",
                width: "75%",
                borderRadius: "0 0 30px 30px",
                margin: "0 auto",
                bgcolor: "#FF5733",
                transition: "all 0.3s",
              }}
            />
            <Box
              className="profile-image"
              component="img"
              src="/my_profile_icon.jpeg"
              sx={{
                width: "110px",
                height: "110px",
                display: "block",
                margin: "30px auto 10px",
                borderRadius: "50%",
                transition: "all 0.5s",
                objectFit: "cover",
                transformOrigin: "center",
              }}
            />
            <Box
              className="profile-content"
              sx={{
                transition: "all 0.1s",
                p: 2,
                textAlign: "center",
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1 }}>
                さとあき
              </Typography>
              <Typography variant="subtitle1" sx={{ color: "#888", mb: 3 }}>
                DEVELOPER
              </Typography>
              <Typography variant="body1" sx={{ mb: 4 }}>
                エンジニア / フルスタックな開発者として、
                革新的なWebソリューションを提供しています。
              </Typography>
            </Box>
            <Box
              className="social-icons"
              sx={{
                position: "absolute",
                opacity: 0,
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                transition: "all 0.3s",
                display: "flex",
                gap: 2,
                p: 2,
              }}
            >
              <Box
                component="a"
                href="https://github.com/akitomonam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon 
                  sx={{ 
                    color: "#f0f0f0", 
                    fontSize: 30,
                    cursor: "pointer",
                  }} 
                />
              </Box>
              <Box
                component="a"
                href="https://x.com/AKITOMO_N4M"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon 
                  sx={{ 
                    color: "#f0f0f0", 
                    fontSize: 30,
                    cursor: "pointer",
                  }} 
                />
              </Box>
              <Box
                component="a"
                href="https://qiita.com/akitomonam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Box
                  component="img"
                  src="/qiita_logo.png"
                  sx={{ 
                    width: 30,
                    height: 30,
                    cursor: "pointer",
                    filter: "brightness(0) invert(1)",
                  }} 
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* 右側のコンテンツ */}
        <Grid item xs={12} md={8}>
          <Box sx={{ mb: 6 }}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "3rem", md: "4rem" },
                mb: 2,
              }}
            >
              SOFTWARE
              <br />
              ENGINEER
            </Typography>
            <Typography variant="body1" sx={{ color: "#888", maxWidth: 600 }}>
              フロントエンドからバックエンドまで
              <br />
              フルスタックエンジニアとして
              <br />
              アジャイルな開発を行っています。
            </Typography>
          </Box>

          <Grid container spacing={3} sx={{ mb: 6 }}>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  bgcolor: "#FF5733",
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ mb: 2 }}>
                  フロントエンド
                  <br />
                  React, Next.js, TypeScript
                </Typography>
                <ArrowForwardIcon />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Box
                sx={{
                  bgcolor: "#B4FF39",
                  borderRadius: 4,
                  p: 3,
                  height: "100%",
                  cursor: "pointer",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Typography variant="h6" sx={{ color: "black", mb: 2 }}>
                  バックエンド
                  <br />
                  Python, Go
                </Typography>
                <ArrowForwardIcon sx={{ color: "black" }} />
              </Box>
            </Grid>
          </Grid>

          <Box>
            {/* 趣味セクションを追加 */}
            <Typography variant="h4" sx={{ mb: 3 }}>
              Hobbies & Interests
            </Typography>
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              {[
                "筋トレ",
                "プログラミング",
                "読書",
                "ゲーム",
                "音楽",
                "映画鑑賞",
              ].map((hobby) => (
                <Chip
                  key={hobby}
                  label={hobby}
                  sx={{
                    bgcolor: "#2A2A2A",
                    color: "#B4FF39",
                    borderRadius: "50px",
                    border: "1px solid #B4FF39",
                  }}
                />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
