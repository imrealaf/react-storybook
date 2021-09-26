import { Typography, Box, Card, CardContent } from "@mui/material";
import { Container, Button } from "components";

function ButtonPage() {
  return (
    <>
      <Container>
        <Box
          sx={{
            backgroundColor: "primary.main",
            textAlign: "center",
            py: 5,
            mb: 4,
            borderRadius: "0.4rem",
          }}
        >
          <Typography variant="h3" color="white">
            <strong>Button</strong>
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Basic button
          </Typography>
          <Typography sx={{ mb: 2 }}>
            The Button comes with three variants: text (default), contained, and
            outlined.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="text">
                Text
              </Button>
              <Button sx={{ mx: 1 }} variant="contained">
                Contained
              </Button>
              <Button sx={{ mx: 1 }} variant="outlined">
                Outlined
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Text buttons
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Text buttons are typically used for less-pronounced actions,
            including those located: in dialogs, in cards. In cards, text
            buttons help maintain an emphasis on card content.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="text">
                Primary
              </Button>
              <Button sx={{ mx: 1 }} variant="text" disabled>
                Disabled
              </Button>
              <Button sx={{ mx: 1 }} variant="text" href="#text-buttons">
                Link
              </Button>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h4" sx={{ mb: 1 }}>
            Contained buttons
          </Typography>
          <Typography sx={{ mb: 2 }}>
            Contained buttons are high-emphasis, distinguished by their use of
            elevation and fill. They contain actions that are primary to your
            app.
          </Typography>
          <Card variant="outlined">
            <CardContent sx={{ p: 2, pt: 3, textAlign: "center" }}>
              <Button sx={{ mx: 1 }} variant="contained">
                Contained
              </Button>
              <Button sx={{ mx: 1 }} variant="contained" disabled>
                Disabled
              </Button>
              <Button sx={{ mx: 1 }} variant="contained" href="#text-buttons">
                Link
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
}
export default ButtonPage;
