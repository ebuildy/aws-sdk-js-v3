import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyAvailabilityZoneGroupRequest, ModifyAvailabilityZoneGroupResult } from "../models/models_4";
import {
  deserializeAws_ec2ModifyAvailabilityZoneGroupCommand,
  serializeAws_ec2ModifyAvailabilityZoneGroupCommand,
} from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface ModifyAvailabilityZoneGroupCommandInput extends ModifyAvailabilityZoneGroupRequest {}
export interface ModifyAvailabilityZoneGroupCommandOutput extends ModifyAvailabilityZoneGroupResult, __MetadataBearer {}

/**
 * <p>Changes the opt-in status of the Local Zone and Wavelength Zone group for your
 *       account.</p>
 *          <p>Use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeAvailabilityZones.html">
 *   		DescribeAvailabilityZones</a> to view the value for <code>GroupName</code>.</p>
 */
export class ModifyAvailabilityZoneGroupCommand extends $Command<
  ModifyAvailabilityZoneGroupCommandInput,
  ModifyAvailabilityZoneGroupCommandOutput,
  EC2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ModifyAvailabilityZoneGroupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EC2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ModifyAvailabilityZoneGroupCommandInput, ModifyAvailabilityZoneGroupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EC2Client";
    const commandName = "ModifyAvailabilityZoneGroupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ModifyAvailabilityZoneGroupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ModifyAvailabilityZoneGroupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ModifyAvailabilityZoneGroupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_ec2ModifyAvailabilityZoneGroupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ModifyAvailabilityZoneGroupCommandOutput> {
    return deserializeAws_ec2ModifyAvailabilityZoneGroupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
