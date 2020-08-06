// https://www.terraform.io/docs/providers/oci/r/functions_invoke_function.html
// generated from terraform resource schema

/*
{
  "version": 0,
  "block": {
    "attributes": {
      "base64_encode_content": {
        "type": "bool",
        "optional": true
      },
      "content": {
        "type": "string",
        "computed": true
      },
      "fn_intent": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "fn_invoke_type": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "function_id": {
        "type": "string",
        "required": true
      },
      "id": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "input_body_source_path": {
        "type": "string",
        "optional": true
      },
      "invoke_endpoint": {
        "type": "string",
        "computed": true
      },
      "invoke_function_body": {
        "type": "string",
        "optional": true,
        "computed": true
      },
      "invoke_function_body_base64_encoded": {
        "type": "string",
        "optional": true,
        "computed": true
      }
    },
    "block_types": {
      "timeouts": {
        "nesting_mode": "single",
        "block": {
          "attributes": {
            "create": {
              "type": "string",
              "optional": true
            },
            "delete": {
              "type": "string",
              "optional": true
            },
            "update": {
              "type": "string",
              "optional": true
            }
          }
        }
      }
    }
  }
}
*/
import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface FunctionsInvokeFunctionConfig extends TerraformMetaArguments {
  readonly base64EncodeContent?: boolean;
  readonly fnIntent?: string;
  readonly fnInvokeType?: string;
  readonly functionId: string;
  readonly inputBodySourcePath?: string;
  readonly invokeFunctionBody?: string;
  readonly invokeFunctionBodyBase64Encoded?: string;
  /** timeouts block */
  readonly timeouts?: FunctionsInvokeFunctionTimeouts;
}
export interface FunctionsInvokeFunctionTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class FunctionsInvokeFunction extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: FunctionsInvokeFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_functions_invoke_function',
      terraformGeneratorMetadata: {
        providerName: 'oci'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._base64EncodeContent = config.base64EncodeContent;
    this._fnIntent = config.fnIntent;
    this._fnInvokeType = config.fnInvokeType;
    this._functionId = config.functionId;
    this._inputBodySourcePath = config.inputBodySourcePath;
    this._invokeFunctionBody = config.invokeFunctionBody;
    this._invokeFunctionBodyBase64Encoded = config.invokeFunctionBodyBase64Encoded;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base64_encode_content - computed: false, optional: true, required: false
  private _base64EncodeContent?: boolean;
  public get base64EncodeContent() {
    return this._base64EncodeContent;
  }
  public set base64EncodeContent(value: boolean | undefined) {
    this._base64EncodeContent = value;
  }

  // content - computed: true, optional: false, required: true
  public get content() {
    return this.getStringAttribute('content');
  }

  // fn_intent - computed: true, optional: true, required: false
  private _fnIntent?: string;
  public get fnIntent() {
    return this._fnIntent ?? this.getStringAttribute('fn_intent');
  }
  public set fnIntent(value: string | undefined) {
    this._fnIntent = value;
  }

  // fn_invoke_type - computed: true, optional: true, required: false
  private _fnInvokeType?: string;
  public get fnInvokeType() {
    return this._fnInvokeType ?? this.getStringAttribute('fn_invoke_type');
  }
  public set fnInvokeType(value: string | undefined) {
    this._fnInvokeType = value;
  }

  // function_id - computed: false, optional: false, required: true
  private _functionId: string;
  public get functionId() {
    return this._functionId;
  }
  public set functionId(value: string) {
    this._functionId = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // input_body_source_path - computed: false, optional: true, required: false
  private _inputBodySourcePath?: string;
  public get inputBodySourcePath() {
    return this._inputBodySourcePath;
  }
  public set inputBodySourcePath(value: string | undefined) {
    this._inputBodySourcePath = value;
  }

  // invoke_endpoint - computed: true, optional: false, required: true
  public get invokeEndpoint() {
    return this.getStringAttribute('invoke_endpoint');
  }

  // invoke_function_body - computed: true, optional: true, required: false
  private _invokeFunctionBody?: string;
  public get invokeFunctionBody() {
    return this._invokeFunctionBody ?? this.getStringAttribute('invoke_function_body');
  }
  public set invokeFunctionBody(value: string | undefined) {
    this._invokeFunctionBody = value;
  }

  // invoke_function_body_base64_encoded - computed: true, optional: true, required: false
  private _invokeFunctionBodyBase64Encoded?: string;
  public get invokeFunctionBodyBase64Encoded() {
    return this._invokeFunctionBodyBase64Encoded ?? this.getStringAttribute('invoke_function_body_base64_encoded');
  }
  public set invokeFunctionBodyBase64Encoded(value: string | undefined) {
    this._invokeFunctionBodyBase64Encoded = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: FunctionsInvokeFunctionTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: FunctionsInvokeFunctionTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      base64_encode_content: this._base64EncodeContent,
      fn_intent: this._fnIntent,
      fn_invoke_type: this._fnInvokeType,
      function_id: this._functionId,
      input_body_source_path: this._inputBodySourcePath,
      invoke_function_body: this._invokeFunctionBody,
      invoke_function_body_base64_encoded: this._invokeFunctionBodyBase64Encoded,
      timeouts: this._timeouts,
    };
  }
}
