package com.dw.server.mappers.tables;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class Scenes {
    @TableId(value = "id", type = IdType.ASSIGN_UUID)
    String id;
    String username;
    String title;
    String prevImg;
    String img;
    @TableField(value = "last_time", fill = FieldFill.INSERT_UPDATE)
    LocalDateTime lastTime;
}
