import { Box, Typography } from '@mui/material'
import React from 'react'

export default function Tags({ tags, selectTag, selectedTag }) {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "row",
                gap: 5,
                flexWrap: "wrap",
            }}
        >
            {
                tags.map((tag, index) => (
                    <Box
                        key={index}
                        sx={(theme) => Object.assign({
                            px: 1,
                            py: 2,
                            textAlign: "center",
                            width: "12%",
                            bgcolor: "white",
                            borderRadius: 4,
                            textTransform: "capitalize",
                            boxShadow: `4px 4px 4px 4px ${theme.palette.primary.light}`,
                            transition: "all 0.2s ease-in-out"
                        },
                        selectedTag === tag ?
                        {
                            bgcolor: theme.palette.secondary.main,
                            scale: '1.09',
                            color: "white",
                        } : {
                            "&:hover": {
                                bgcolor: theme.palette.secondary.main,
                                scale: '1.09',
                                color: "white",
                            }
                        }
                        )}
                        onClick={() => selectTag(tag)}
                    >
                        <Typography variant='subtitle1' letterSpacing={0.7}>{tag}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}
