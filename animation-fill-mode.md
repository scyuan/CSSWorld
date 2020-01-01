`animation-fill-mode`设置css动画在执行之前和之后如何将样式应用于目标


- `none`

默认值。

当动画未执行时，动画不会将任何样式作用于目标。


- `forwards`

目标将保留最后一个关键帧计算值，最后一个关键帧取决于`animation-direction`和`animation-itreation-count`值
 `animation-direction`|`animation-iteration-count` | last keyframe
--| -- | --
normal|even or odd| 100% or to
reverse | even or odd | 0% or from
alternate | even | 0% or from
alternate | odd | 100% or to
alternate-reverse|even|100% or to
alternate-reverse|odd|0% or from

- `backwords`

目标将保留第一个关键帧计算值，最后一个关键帧取决于`animation-direction`

`animation-direction` | first keyframe
---|---
normal or alternate| 0% or from
reverse or alternate-reverse | 100% or to