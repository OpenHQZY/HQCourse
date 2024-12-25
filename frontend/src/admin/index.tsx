import {useEffect, useState} from "react";
import {Button, TextField, Typography, Box} from '@mui/material';

export default function Admin() {

    useEffect(() => {
        CheckLogin();
    }, [])

    return (
        <Box style={{
            maxWidth: '800px',
            margin: 'auto',
            marginTop: '5vh',
            gap: '16px'
        }}>
            <Typography style={{
                fontSize: '24px',
                marginBottom: '16px',
                color: "var(--primary-100)"
            }}>
                湖汽课表 - 管理员页面
            </Typography>
            <Typography
                style={{
                    fontSize: '16px',
                    marginBottom: '16px',
                    color: "var(--text-200)"
                }}>
                请勿泄露管理员密码
            </Typography>

            {/* 设置公告按钮 */}
            <Box style={{
                alignItems: "center",
                gap: '16px',
                border: '1px solid gray',
                display: 'flex',
                padding: '16px',
                borderRadius: '8px',
                flexDirection: 'column'
            }}>
                <Typography>设置公告</Typography>
                <SetNotice/>
            </Box>


            {/* 添加数据 */}
            <Box
                style={{
                    alignItems: "center",
                    gap: '16px',
                    border: '1px solid gray',
                    display: 'flex',
                    padding: '16px',
                    borderRadius: '8px',
                    flexDirection: 'column',
                    marginTop: '16px'
                }}>
                <Typography>添加课表</Typography>
                <AddData/>
            </Box>

            <Box style={{
                alignItems: "center",
                gap: '16px',
                border: '1px solid gray',
                display: 'flex',
                padding: '16px',
                borderRadius: '8px',
                flexDirection: 'column',
                marginTop: '16px'
            }}>
                {/* 删除数据 */}
                <Typography>管理已有课表</Typography>
                <DataFiles/>
            </Box>
        </Box>
    );
}

function CheckLogin() {
    fetch("/api/check", {
        method: "GET",
        headers: {
            "Authorization": `${localStorage.getItem('token')}`
        }
    }).then(response => {
        if (!response.ok) {
            window.location.href = '/admin/login';
        }
    })
}

function SetNotice() {
    const [ok, setOk] = useState(false);

    const handleSetNotice = async () => {
        fetch("/api/notice", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": `${localStorage.getItem('token')}`
            },
            body: JSON.stringify({notice: (document.getElementById('notice') as HTMLInputElement).value})
        }).then(response => {
            setOk(response.ok);
        })
    }

    return (
        <Box display="flex" alignItems="center">
            <TextField id="notice" variant="outlined" sx={{
                height: "40px",
                "& .MuiInputBase-root": {
                    color: "var(--text-100)",
                    height: "40px"
                },
                "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "var(--text-100)",
                    color: "var(--text-100)",
                    height: "40px"
                }
            }}/>
            <Button variant="contained" color="primary" onClick={handleSetNotice}>设置公告</Button>
            {ok && <Typography color="success.main">设置成功</Typography>}
        </Box>
    );
}

function AddData() {
    const handleFileUpload = async () => {
        const files = (document.getElementById('upload-data') as HTMLInputElement).files;

        if (!files) return;

        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('files', files[i]);
        }

        const response = await fetch("/api/upload", {
            method: 'PUT',
            headers: {
                "Authorization": `${localStorage.getItem('token')}`
            },
            body: formData
        });

        alert(response.ok ? "文件上传成功" : "文件上传失败");
    }

    return (
        <Box>
            <input type="file" multiple id="upload-data"/>
            <Button variant="contained" color="primary" onClick={handleFileUpload}>上传文件</Button>
        </Box>
    );
}

function DataFiles() {
    const [files, setFiles] = useState<string[]>([]);

    useEffect(() => {
        fetch("/api/data", {
            headers: {
                "Authorization": `${localStorage.getItem('token')}`
            }
        }).then(response => response.json())
            .then(data => {
                setFiles(data.files);
            })
    }, [])

    const handleDelete = async (file: string) => {
        fetch("/api/data/" + file, {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem('token')}`
            },
        }).then(response => {
            if (response.ok) {
                setFiles(files.filter(f => f !== file));
            }
        })
    }

    const handleRefresh = async () => {
        fetch("/api/data", {
            headers: {
                "Authorization": `${localStorage.getItem('token')}`
            }
        }).then(response => response.json())
            .then(data => {
                setFiles(data.files);
            })
    }

    const handleClean = async () => {
        fetch("/api/clean", {
            method: 'DELETE',
            headers: {
                "Authorization": `${localStorage.getItem('token')}`
            }
        }).then(response => {
            if (response.ok) {
                setFiles([]);
            }
        })
    }

    return (
        <Box style={{
            padding: '16px',
            width: '100%'
        }}>
            <Box style={{
                marginTop: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: '1px solid gray',
                paddingBottom: '16px',
                marginBottom: '16px'
            }}>
                <Typography>操作</Typography>
                <Button variant="outlined" color="error" onClick={handleClean}>清空</Button>
                <Button variant="outlined" color="primary" onClick={handleRefresh}>刷新</Button>
            </Box>
            {files.map(file => (
                <Box key={file} style={{
                    borderBottom: '1px solid gray',
                    paddingBottom: '16px',
                    marginBottom: '16px'
                }} display="flex" justifyContent="space-between" alignItems="center">
                    <Typography>{file}</Typography>
                    <Button variant="outlined" color="error" onClick={() => handleDelete(file)}>删除</Button>
                </Box>
            ))}
        </Box>
    );
}