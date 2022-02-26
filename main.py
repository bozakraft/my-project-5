def on_button_pressed_a():
    for index in range(5):
        led.plot(index, 0)
        basic.pause(1000)
input.on_button_pressed(Button.A, on_button_pressed_a)
