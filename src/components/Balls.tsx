// @ts-nocheck
"use client"

import { useCallback, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface BallsProps {
  className?: string
}

const Balls: React.FC<BallsProps> = ({ className }) => {
  const wrapper = useRef<HTMLDivElement>(null)

  const { ref, inView } = useInView({
    rootMargin: "-15% 0% -15% 0%",
    triggerOnce: true,
    delay: 250,
  })

  const setup = useCallback(() => {
    const width = wrapper.current?.clientWidth ?? 0
    const height = wrapper.current?.clientHeight ?? 0

    var NUM_BALLS = 2,
      DAMPING = 1,
      GRAVITY = 0.1,
      MOUSE_SIZE = 13,
      SPEED = 0.3,
      OBSTACLE_SIZE = 12,
      MAX_LIMIT_SPEED = 0.3

    var canvas: any,
      ctx: {
        clearRect: (arg0: number, arg1: number, arg2: any, arg3: any) => void
        fillStyle: string
        strokeStyle: string
        beginPath: () => void
        arc: (
          arg0: number,
          arg1: number,
          arg2: number,
          arg3: number,
          arg4: number
        ) => void
        fill: () => void
        stroke: () => void
      },
      TWO_PI = Math.PI * 2,
      balls: any[] = [],
      mouse = { down: false, x: 0, y: 0 }

    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.requestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60)
      }

    var Ball = function (
      this: any,
      x: any,
      y: any,
      radius: number,
      index: any
    ) {
      this.x = x
      this.y = y

      this.px = x
      this.py = y

      this.fx = 0
      this.fy = 0

      this.radius = radius
      this.index = index
    }

    Ball.prototype.apply_force = function (delta: number) {
      delta *= delta

      this.fy += GRAVITY

      this.x += this.fx * delta
      this.y += this.fy * delta

      this.fx = this.fy = 0
    }

    Ball.prototype.verlet = function () {
      var dx = this.x - this.px
      var dy = this.y - this.py
      var d = Math.sqrt(dx * dx + dy * dy)
      if (d > MAX_LIMIT_SPEED) {
        dx = (dx * MAX_LIMIT_SPEED) / d
        dy = (dy * MAX_LIMIT_SPEED) / d
      }

      var nx = this.x + dx
      var ny = this.y + dy

      this.px = this.x
      this.py = this.y

      this.x = nx
      this.y = ny
    }

    Ball.prototype.draw = function (ctx: {
      beginPath: () => void
      arc: (arg0: any, arg1: any, arg2: any, arg3: number, arg4: number) => void
      save: () => void
      translate: (arg0: number, arg1: number) => void
      scale: (arg0: number, arg1: number) => void
      drawImage: (arg0: HTMLImageElement, arg1: number, arg2: number) => void
      restore: () => void
    }) {
      var img = new Image()
      img.src = `./balls/${this.index + 1}.svg` // Replace with the path to your image

      ctx.beginPath()
      ctx.arc(this.x, this.y, this.radius, 0, TWO_PI)
      // ctx.fill();
      ctx.save()
      ctx.translate(this.x - this.radius, this.y - this.radius)
      ctx.scale(
        (this.radius / (img.width / 2)) * 1,
        (this.radius / (img.height / 2)) * 1
      )
      ctx.drawImage(img, 0, 0)
      ctx.restore()
    }

    //---------------------------------------

    var resolve_collisions = function (ip?: number | undefined) {
      var i = balls.length

      while (i--) {
        var ball_1 = balls[i]

        if (mouse.down) {
          var diff_x = ball_1.x - mouse.x
          var diff_y = ball_1.y - mouse.y
          var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y)
          var real_dist = dist - (ball_1.radius + MOUSE_SIZE)

          if (real_dist < 0) {
            var depth_x = diff_x * (real_dist / dist)
            var depth_y = diff_y * (real_dist / dist)

            ball_1.x -= depth_x * 0.008
            ball_1.y -= depth_y * 0.008
          }
        }

        {
          var diff_x = ball_1.x - width / 2
          var diff_y = ball_1.y - height / 2
          var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y)
          var real_dist = dist - (ball_1.radius + OBSTACLE_SIZE)

          if (real_dist < 0) {
            var depth_x = diff_x * (real_dist / dist)
            var depth_y = diff_y * (real_dist / dist)

            ball_1.x -= depth_x * 0.005
            ball_1.y -= depth_y * 0.005
          }
        }

        var n = balls.length

        while (n--) {
          if (n == i) continue

          var ball_2 = balls[n]

          var diff_x = ball_1.x - ball_2.x
          var diff_y = ball_1.y - ball_2.y

          var length = diff_x * diff_x + diff_y * diff_y
          var dist = Math.sqrt(length)
          var real_dist = dist - (ball_1.radius + ball_2.radius)

          if (real_dist < 0) {
            var vel_x1 = ball_1.x - ball_1.px
            var vel_y1 = ball_1.y - ball_1.py
            var vel_x2 = ball_2.x - ball_2.px
            var vel_y2 = ball_2.y - ball_2.py

            var depth_x = diff_x * (real_dist / dist)
            var depth_y = diff_y * (real_dist / dist)

            ball_1.x -= depth_x * 0.5
            ball_1.y -= depth_y * 0.5

            ball_2.x += depth_x * 0.5
            ball_2.y += depth_y * 0.5

            if (ip) {
              var pr1 =
                  (DAMPING * (diff_x * vel_x1 + diff_y * vel_y1)) / length,
                pr2 = (DAMPING * (diff_x * vel_x2 + diff_y * vel_y2)) / length

              vel_x1 += pr2 * diff_x - pr1 * diff_x
              vel_x2 += pr1 * diff_x - pr2 * diff_x

              vel_y1 += pr2 * diff_y - pr1 * diff_y
              vel_y2 += pr1 * diff_y - pr2 * diff_y

              ball_1.px = ball_1.x - vel_x1
              ball_1.py = ball_1.y - vel_y1

              ball_2.px = ball_2.x - vel_x2
              ball_2.py = ball_2.y - vel_y2
            }
          }
        }
      }
    }

    var check_walls = function () {
      var i = balls.length

      while (i--) {
        var ball = balls[i]

        if (ball.x < ball.radius) {
          var vel_x = Math.max(ball.px - ball.x, 0.05)
          ball.x = ball.radius
          ball.px = ball.x - vel_x * DAMPING
        } else if (
          canvas &&
          canvas?.width &&
          ball.x + ball.radius > canvas.width
        ) {
          var vel_x = Math.min(ball.px - ball.x, -0.05)
          ball.x = canvas?.width - ball.radius
          ball.px = ball.x - vel_x * DAMPING
        }

        if (ball.y < ball.radius) {
          var vel_y = Math.max(ball.py - ball.y, 0.05)
          ball.y = ball.radius
          ball.py = ball.y - vel_y * DAMPING
        } else if (ball.y + ball.radius > canvas.height) {
          var vel_y = Math.min(ball.py - ball.y, -0.05)
          ball.y = canvas.height - ball.radius
          ball.py = ball.y - vel_y * DAMPING
        }
      }
    }

    var check_objects = function () {
      var i = balls.length

      const left = width / 2 - 9,
        right = width / 2 + 9,
        top = height / 2 - 18,
        bottom = height / 2 + 18

      while (i--) {
        var ball = balls[i]

        // if (ball.x >= left && ball.x <= right) {
        //   if (ball.y < bottom + ball.radius) {
        //     var vel_y = ball.py - ball.y
        //     ball.y = bottom + ball.radius
        //     ball.py = ball.y - vel_y * DAMPING
        //   }
        // }

        // if (ball.y >= top && ball.y <= bottom) {
        //   if (ball.x < right + ball.radius) {
        //     var vel_x = ball.px - ball.x
        //     ball.x = right + ball.radius
        //     ball.px = ball.x - vel_x * DAMPING
        //   } else if (ball.x + ball.radius > left) {
        //     var vel_x = ball.px - ball.x
        //     ball.x = left - ball.radius
        //     ball.px = ball.x - vel_x * DAMPING
        //   }
        // }
      }
    }

    var update = function () {
      //var time = new Date().getTime();

      var iter = 6

      var delta = SPEED / iter

      while (iter--) {
        var i = balls.length

        while (i--) {
          balls[i].apply_force(delta)
          balls[i].verlet()
        }

        resolve_collisions()
        check_walls()
        check_objects()

        var i = balls.length
        while (i--) balls[i].verlet()

        resolve_collisions(1)
        check_walls()
        check_objects()
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = "rgba(27,155,244,0.3)"

      var i = balls.length
      while (i--) balls[i].draw(ctx)

      if (mouse.down) {
        // ctx.fillStyle = 'rgba(0,0,0,0.1)';
        // ctx.strokeStyle = 'rgba(0,0,0,0.2)';
        // ctx.beginPath();
        // ctx.arc(mouse.x, mouse.y, MOUSE_SIZE, 0, TWO_PI);
        // ctx.fill();
        // ctx.stroke();
      }

      requestAnimationFrame(update)

      //console.log(new Date().getTime() - time);
    }

    var add_ball = function (x: number, y: number, r: number, index: number) {
      var x = x || Math.random() * (canvas.width - 60) + 30,
        y = y || Math.random() * (canvas.height - 60) + 30,
        r = r || 10 + Math.random() * 20,
        s = true,
        i = balls.length

      while (i--) {
        var ball = balls[i]
        var diff_x = ball.x - x
        var diff_y = ball.y - y
        var dist = Math.sqrt(diff_x * diff_x + diff_y * diff_y)

        if (dist < ball.radius + r) {
          s = false
          break
        }
      }

      // if (s)

      const ballSize = window.innerWidth <= 768 ? 15 : 20
      balls.push(new (Ball as any)(x, y, ballSize, index))
    }

    return function () {
      canvas = document.getElementById("c")
      ctx = canvas.getContext("2d")

      canvas.width = width
      canvas.height = height

      add_ball((width - OBSTACLE_SIZE) / 4 - 10, 0, 0, 0)
      add_ball(width - (width - OBSTACLE_SIZE) / 4 - 10, 0, 0, 1)

      canvas.onmousedown = function (e: {
        which: number
        preventDefault: () => void
      }) {
        if (e.which == 1) {
          mouse.down = true
          setTimeout(() => {
            mouse.down = false
          }, 100)

          // add_ball(mouse.x, mouse.y);
        } else if (e.which == 3) {
        }

        e.preventDefault()
      }

      canvas.onmouseup = function (e: {
        which: number
        preventDefault: () => void
      }) {
        if (e.which == 3) {
          mouse.down = false
          document.body.style.cursor = "default"
        }

        e.preventDefault()
      }

      canvas.onmousemove = function (e: { clientX: number; clientY: number }) {
        mouse.down = true
        var rect = this.getBoundingClientRect()
        mouse.x = e.clientX - rect.left
        mouse.y = e.clientY - rect.top
      }

      canvas.onmouseout = function () {
        mouse.down = false
        document.body.style.cursor = "default"
      }

      canvas.oncontextmenu = function (e: { preventDefault: () => void }) {
        e.preventDefault()
        return false
      }

      update()
    }
  }, [wrapper])

  useEffect(() => {
    if (wrapper.current) {
      setup()()
    }
  }, [wrapper])

  return (
    <div className={className ?? ""} ref={wrapper}>
      <canvas id="c" className="w-full h-full" ref={ref}></canvas>
    </div>
  )
}

export default Balls
