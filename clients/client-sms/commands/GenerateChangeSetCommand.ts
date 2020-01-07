import {
  SMSClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes
} from "../SMSClient";
import {
  GenerateChangeSetRequest,
  GenerateChangeSetResponse
} from "../models/index";
import {
  deserializeAws_json1_1GenerateChangeSetCommand,
  serializeAws_json1_1GenerateChangeSetCommand
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  SerdeContext,
  HttpHandlerOptions as __HttpHandlerOptions
} from "@aws-sdk/types";

export type GenerateChangeSetCommandInput = GenerateChangeSetRequest;
export type GenerateChangeSetCommandOutput = GenerateChangeSetResponse;

export class GenerateChangeSetCommand extends $Command<
  GenerateChangeSetCommandInput,
  GenerateChangeSetCommandOutput,
  SMSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GenerateChangeSetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SMSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GenerateChangeSetCommandInput, GenerateChangeSetCommandOutput> {
    this.middlewareStack.use(
      getSerdePlugin(configuration, this.serialize, this.deserialize)
    );

    const stack = clientStack.concat(this.middlewareStack);

    const handlerExecutionContext: HandlerExecutionContext = {
      logger: {} as any
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: GenerateChangeSetCommandInput,
    context: SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1GenerateChangeSetCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: SerdeContext
  ): Promise<GenerateChangeSetCommandOutput> {
    return deserializeAws_json1_1GenerateChangeSetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}