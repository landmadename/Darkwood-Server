package com.dw.server.mappers.tables;

import com.baomidou.mybatisplus.annotation.FieldFill;
import com.baomidou.mybatisplus.annotation.IdType;
import com.baomidou.mybatisplus.annotation.TableField;
import com.baomidou.mybatisplus.annotation.TableId;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class InnerFrames {
    @TableId(value = "id", type = IdType.ASSIGN_UUID)
    String id;
    String username;
    String title;
    String prevImg;
    String color;
    @TableField(value = "last_time", fill = FieldFill.INSERT_UPDATE)
    LocalDateTime lastTime;
}
